import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./modules/products/products.routes";
import cors from 'cors';

const app:Application = express();
// const port = 3000

//parsers
app.use(express.json());
app.use(cors());



//application routes
app.use("/api/products", ProductRoutes);
// app.use("/api/orders", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
