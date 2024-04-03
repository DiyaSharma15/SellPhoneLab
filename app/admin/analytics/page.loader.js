// Assuming this file is located at /app/admin/analytics/page.loader.js

import Stripe from 'stripe';

export async function loader() {
    console.log('Starting to fetch Stripe data...');
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

    try {
        const paymentsData = await stripe.charges.list({ limit: 10, status: 'succeeded' });
        console.log('Fetched payments data:', paymentsData.data);

        const subscriptionsData = await stripe.subscriptions.list({ limit: 10 });
        console.log('Fetched subscriptions data:', subscriptionsData.data);

        // Simplify and process your Stripe data here as needed
        return {
            props: {
                stripeAnalytics: {
                    totalTransactions: paymentsData.data.length,
                    totalRevenue: paymentsData.data.reduce((acc, charge) => acc + charge.amount, 0) / 100,
                    // Add additional processed data as needed
                },
            },
        };
    } catch (error) {
        console.error('Error fetching Stripe data:', error);
        return { props: { stripeAnalytics: {} } }; // Return an empty object on error
    }
}
