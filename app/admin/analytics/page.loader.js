import Stripe from 'stripe';

export async function loader() {
  if (!process.env.NEXT_PUBLIC_SECRET_API_KEY) {
    console.error('Stripe secret key is not set. Please check your environment variables.');
    return { props: { stripeAnalytics: {} } }; // Returning early if no API key
  }

  const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_API_KEY);

  try {
    const paymentsData = await stripe.charges.list({ limit: 10, status: 'succeeded' });
    const subscriptionsData = await stripe.subscriptions.list({ limit: 10 });

    const totalRevenue = paymentsData.data.reduce((acc, charge) => acc + charge.amount, 0) / 100;
    const averageTransactionValue = paymentsData.data.length > 0 ? totalRevenue / paymentsData.data.length : 0;
    const newSubscriptions = subscriptionsData.data.filter(sub => sub.status === 'active').length;

    return {
      props: {
        stripeAnalytics: {
          totalTransactions: paymentsData.data.length,
          totalRevenue: totalRevenue,
          averageTransactionValue: averageTransactionValue,
          newSubscriptions: newSubscriptions,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching Stripe data:', error);
    return { props: { stripeAnalytics: {} } }; // Return an empty object on error
  }
}
