export interface Variants {
    type: string;
    value: string;
}
export interface Inventory {
    quantity: number;
    inStock?: boolean;
}
export interface InProduct {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: [Variants];
    inventory: [Inventory];
}