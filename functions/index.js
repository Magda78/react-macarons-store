const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51HqNdwGB4kjijur7nq0PxByXzuS67wrl4xjHHiBM1LBeXcHbGfDUFv72Of4lv4AFFBmtL7SBBHSb366PyRKBQG5q00lMTU5euJ'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.get('/mm', (request, response) => response.status(200).send('hiiiiiiiiiiii'));

app.post('/checkout/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: 'usd'
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret
	});
});

//app.post('/payment', (req, res) => {
//	const body = {
//	  source: req.body.token.id,
//	  amount: req.body.amount,
//	  currency: 'usd'
//	};
  
//	stripe.charges.create(body, (stripeErr, stripeRes) => {
//	  if (stripeErr) {
//		res.status(500).send({ error: stripeErr });
//	  } else {
//		res.status(200).send({ success: stripeRes });
//	  }
//	});



// - Listen command
exports.api = functions.https.onRequest(app);