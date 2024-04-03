// Import the Stripe package
import Stripe from 'stripe';

// This is the loader function that Next.js will call server-side before rendering the component
export async function loader() {
  // Initialize Stripe with your secret key from environment variables
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let transactions = 0;
  let totalRevenue = 0;

  try {
    // Fetch the list of payment intents (transactions) with a limit of 10 (or adjust as needed)
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 10,
    });

    // Count the number of transactions fetched
    transactions = paymentIntents.data.length;

    // Calculate the total revenue from the fetched transactions
    // Note: Stripe amounts are in the smallest currency unit (e.g., cents for USD)
    totalRevenue = paymentIntents.data.reduce((acc, curr) => acc + (curr.amount_received / 100), 0);
  } catch (error) {
    console.error('Error fetching Stripe data:', error.message);
    // Handle errors appropriately, potentially setting transactions and totalRevenue to defaults or error states
  }

  // Return the fetched data as props for your component
  return {
    props: {
      stripeData: {
        transactions,
        totalRevenue,
      },
    },
  };
}
