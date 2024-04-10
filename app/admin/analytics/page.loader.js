import Stripe from 'stripe';

export async function loader() {
  if (!process.env.NEXT_PUBLIC_SECRET_API_KEY) {
    console.error('Stripe secret key is not set. Please check your environment variables.');
    return { props: { stripeAnalytics: {} } };
  }

  const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_API_KEY);

  try {
    // Fetch a larger set of payments data for more comprehensive analytics
    const paymentsData = await stripe.charges.list({ limit: 100, status: 'succeeded' });

    const totalRevenue = paymentsData.data.reduce((acc, charge) => acc + charge.amount, 0) / 100;
    const averageTransactionValue = paymentsData.data.length > 0 ? totalRevenue / paymentsData.data.length : 0;

    // Example logic for new vs. returning customers based on email frequency
    let customerEmails = paymentsData.data.map(charge => charge.billing_details.email).filter(email => !!email);
    let uniqueCustomers = new Set(customerEmails);
    let returningCustomers = customerEmails.filter((email, index, array) => array.indexOf(email) !== index).length;
    let newCustomers = uniqueCustomers.size - returningCustomers;
    let hasMore = true;
    let lastChargeId = null;
    const allPayments = [];

    while (hasMore) {
      const params = { limit: 100, status: 'succeeded' };
      if (lastChargeId) params.starting_after = lastChargeId;

      const paymentsBatch = await stripe.charges.list(params);
      allPayments.push(...paymentsBatch.data);
      lastChargeId = paymentsBatch.data[paymentsBatch.data.length - 1]?.id;
      hasMore = paymentsBatch.has_more;
    }

    const monthlyRevenue = {};
    const monthlyTransactions = {};

    allPayments.forEach(payment => {
      const date = new Date(payment.created * 1000);
      const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

      if (!monthlyRevenue[monthYear]) {
        monthlyRevenue[monthYear] = 0;
        monthlyTransactions[monthYear] = 0;
      }

      monthlyRevenue[monthYear] += payment.amount / 100;
      monthlyTransactions[monthYear]++;
    });
    return {
      props: {
        stripeAnalytics: {
          totalTransactions: paymentsData.data.length,
          totalRevenue,
          averageTransactionValue,
          newCustomers,
          returningCustomers,
          monthlyRevenue,
          monthlyTransactions,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching Stripe data:', error);
    return { props: { stripeAnalytics: {} } };
  }
}
