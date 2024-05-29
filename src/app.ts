import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./modules/products/products.routes";
import cors from "cors";
import { OrderRoutes } from "./modules/orders/router.order";
import dotenv from "dotenv";
import { errorHandler } from "./modules/middleware/global.error";
import { notFound } from "./modules/middleware/not.found";

const app: Application = express();
// const port = 3000
dotenv.config();
//parsers
app.use(express.json());
app.use(cors());


//application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello SR Shop -----");
});

// Error handler middleware
app.use(notFound);
app.use(errorHandler);

export default app;
