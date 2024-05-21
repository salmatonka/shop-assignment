import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products/products.routes';
const app = express()
// const port = 3000

//parsers
app.use(express.json());


app.use("/api/products", ProductRoutes);
// app.use("/api/products", ProductRoutes);

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})



export default app;