// pages/api/stripeTransactions.js

import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
    // Retrieve balance including funds on hold
    const balance = await stripe.balance.retrieve();
    const fundsOnHold = balance.pending.reduce((total, current) => total + current.amount, 0) / 100; // Convert to dollars

    // Assuming you want to list some transactions as well
    const transactions = await stripe.charges.list({ limit: 15 }); // Adjust based on your needs

    res.status(200).json({
      totalRevenue: fundsOnHold.toFixed(2),
      transactions: transactions.data.length,
    });
  } catch (error) {
    console.error('Error fetching Stripe data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
