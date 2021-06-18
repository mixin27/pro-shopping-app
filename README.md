# Pro Shoping App

A pratical shopping app using node, react and react-bootstrap.

This project is just practicing the udemy course ([MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce/))

## How To

1. You need to clone this repository using this command

   `git clone git@github.com:ZattWine/pro-shopping-app.git`

2. Then, create `.env` file under the project `root` directory and add the following and save.

   ```js
   NODE_ENV = production or development
   PORT = your_port_number
   MONGO_URI = your_mongodb_uri
   JWT_SECRET = your_jwt_secret_key
   PAYPAL_CLIENT_ID = your_paypal_client_id
   STRIPE_KEY = your_stripe_secret_key
   ```

3. Next, seed the sample data using the following command

   `npm run data:import`

4. If success the data import, run the following command

   `npm run dev`

5. Then, you can test the app on your browser by typing

   `http://locahost:<your_port>/`

## Note

- `Stripe` payment is currently implemented as a demo.
- `PayPal` does not support `Myanmar` so I can't implement this payment method well.

- Import - `npm run data:import`
- Destroy - `npm run data:destroy`

- Run `server` only - `npm run server`
- Run `client` only - `npm run client`
