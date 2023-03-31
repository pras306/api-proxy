const express = require('express');
const axios = require('axios');

const router = express.Router();
const error = new Error();
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

router.get('/', (req, res) => {
    res.json({ success: 'Welcome to Stripe Endpoint' });
});

router.post('/create-payment-intent', async (req, res, next) => {
    
    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1MrJX4SDC83941gwlZPfQYYO' },
                { shipping_rate: 'shr_1MrF5ISDC83941gw5Hi5Wfyh' },
            ],
            line_items: req.body.cartItems.map((item) => {
                const img = item.image;

                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.title,
                            images: [img]
                        },
                        unit_amount: Math.round(Number(item.amount * 100).toFixed(2))
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity
                }   
            }),
            success_url: `${req.headers.origin}/checkout/true`,
            cancel_url: `${req.headers.origin}/checkout/false`,
          
        };

        const session = await stripe.checkout.sessions.create(params);

        res.status(200).json(session);

    } catch(err) {
        error.message = err.message || 'Unable to get requested data. Please try again.';
        error.status = err.statusCode || 500;
        next(error);
    }
})


module.exports = router;