import stripePackage from 'stripe';

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  console.log("sdfsad");
  return false;
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { items } = req.body;

    // Transform each item into Stripe line items format
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'CAD',
        product_data: {
          images: [item.image],
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe expects amount in cents
      },
      quantity: item.quantity,
    }));

    // Create a checkout session with the line items
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.REDIRECT_URL}?status=success`,
      cancel_url: `${process.env.REDIRECT_URL}?status=cancel`,
    });

    res.json({ sessionId: session.id }); // Send the session ID back to the client
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}