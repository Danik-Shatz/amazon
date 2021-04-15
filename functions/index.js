const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HT4EiBHDcEQFoYg2SCIOp09juUunIFryUiHWSw53Oq2oxaT9Wt9LU6IfKkDlip8kb59oKUidX3c3OVqtczmCsGt000p7tEztk"
);

//API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request Received. Amount is ==>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/fir-f9537/us-central1/api
