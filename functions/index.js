const functions = require("firebase-functions");
const express = require('express')
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IADDAHqbn1QlJyQ9hxhH6QOxqggmQgXe9dWXHmMhlYn5EimWZwYxi205zeyYHON2jjp6uBrkfog9qeFnGwq1vcM00uvhiIUzL');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



//Api

//App config
const app = express()

//Middlewares
app.use(cors({ origin: true }))
app.use(express.json())


// app.post("/payments/create", async (request, response) => {
//     const total = request.query.total;

//     console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total, // subunits of the currency
//       currency: "usd",
//     });

//     // OK - Created
//     response.status(201).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   });
//Api Routes
app.get('/', (req, res) => res.status(200).send('hello world'))
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    //OK - created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})
//Listen Command
exports.api = functions.https.onRequest(app)


