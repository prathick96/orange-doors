import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDb from "./config/db.js";

import productRoutes from './routes/productRouter.js';
import userRoutes from './routes/userRouter.js';
import orderRouter from './routes/orderRouter.js';

const app = express();

app.use(express.json())

dotenv.config()

connectDb()

app.get('/', (req, res) => {
    res.send("API running");
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT, console.log(`Server up in ${process.env.NODE_ENV} mode on ${process.env.PORT}`))