import { gql } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Mutations: {
        createInvoice: gql`
            mutation CreateInvoice($input: InvoiceInput!) {
                createInvoice(input: $input) {
                    client
                    trip
                    invoiceDate
                    image
                    products {
                        productType
                        product
                        description
                        total
                    }
                }
            }
        `,
    },
};
