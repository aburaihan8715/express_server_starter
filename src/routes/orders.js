import express from "express";
import Stripe from "stripe";
import { stripeSecretKey } from "../config/constant.js";

const stripe = new Stripe(stripeSecretKey);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      // our product info (we send items array from client)
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),

      // require for create session
      payment_method_types: ["card"],
      mode: "payment",
      // TODO:
      // perfect way follow jonas video
      // because it should be dynamic
      success_url: `http://localhost:5173/success`,
      cancel_url: `http://localhost:5173/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export { router as orderRoutes };
