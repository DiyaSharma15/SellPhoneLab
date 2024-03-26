import { NextResponse } from 'next/server';
import stripePackage from 'stripe';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_SCRET);

export async function POST(req, res) {
    if (req.method === 'POST') {
        try {
            const body = await req.json();
            const { items } = body;
            
            const transformedItems = items.map((item) => ({
                price_data: {
                    currency: "CAD",
                    product_data: {
                        name: item.name,
                        images: [item.image],
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            }))
           // console.log(transformedItems)
            try {
               
                
                const session = await stripe.checkout.sessions.create({
                  line_items: transformedItems,
                  mode: 'payment',
                  success_url: 'http://localhost:3000/success',
                  cancel_url: 'http://localhost:3000/',
                }
                // {
                //     headers: stripeHeaders
                // }
                );
                return NextResponse.json({"sessionURL": session.url});
              } catch (err) {
                console.log(err);
                return NextResponse.status(err.statusCode || 500).json(err.message);
              }
            // You can add your processing logic here

            // Return a success response if processing is successful
           // return NextResponse.json({ message: 'Processing successful' });
        } catch (error) {
            console.error('Error processing items:', error);
            // Return an error response if an error occurs
            return NextResponse.error(new Error('An internal server error occurred'), { status: 500 });
        }
    } else {
        // Return a method not allowed response for non-POST requests
        return NextResponse.error(new Error('Method Not Allowed'), { status: 405 });
    }
}
