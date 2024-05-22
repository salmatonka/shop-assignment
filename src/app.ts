import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./modules/products/products.routes";
import cors from "cors";
import { OrderRoutes } from "./modules/orders/router.order";
import { errorHandler, notFound } from "./modules/middleware/error.handler";
import dotenv from 'dotenv';
const app: Application = express();
// const port = 3000
dotenv.config()
//parsers
app.use(express.json());
app.use(cors());

// Error handler middleware
app.use(notFound)
app.use(errorHandler)

//application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);


app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hell SR Shop -----')
})
app.get('/test', (req: Request, res: Response) => {
  res.status(200).send('SR Shop testing')
})
export default app;
