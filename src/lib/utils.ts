"use client";
export interface Invoice {
    client: string;
    trip: string;
    invoiceDate: string;
    image: string;
    products: [
        {
            productType: string;
            product: string;
            description: string;
            total: number;
        }
    ];
}
