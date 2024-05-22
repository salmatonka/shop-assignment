import { Model } from "mongoose";

export type TVariants = {
  type: string;
  value: string;
};
export type TInventory = {
  quantity: number;
  inStock?: boolean;
};
export type TProduct = {
  // id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [TVariants];
  inventory: [TInventory];
};

//for creating static

export interface ProductModel extends Model<TProduct> {
  isUserExists(id: string): Promise<TProduct | null>;
}

// export type ProductMethods = {
//   isUserExists( id:string ) : Promise<TProduct | null>;
// };

// export type ProductModel = Model<
// TProduct,
// Record<string,never>,
// ProductMethods
// >;
