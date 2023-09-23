"use client";
import React from "react";
import { Formik } from "formik";
import { Heading, InvoiceForm, ProductForm } from "@/components";
import { Invoice } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import InvoiceOperations from "@/graphql/operations/invoice";

const CreateInvoice = () => {
    // it wil show Failed to fetch because of no server
    const [createInvoice, { data, error }] = useMutation(
        InvoiceOperations.Mutations.createInvoice
    );

    if (data) {
        // Invoice creation successful, handle the response
        alert(data.createInvoice);
    }

    if (error) {
        // Handle any errors
        console.error("Error creating invoice:", error);
    }
    return (
        <div>
            <Heading title="Invoices" subtitle="Invoices / New Invoices" />
            <Formik
                initialValues={{
                    client: "",
                    trip: "",
                    invoiceDate: "",
                    image: "",
                    products: [
                        {
                            productType: "",
                            product: "",
                            description: "",
                            total: 0,
                        },
                    ],
                }}
                onSubmit={(values: Invoice) => {
                    const data = {
                        client: values.client,
                        trip: values.trip,
                        invoiceDate: values.invoiceDate,
                        image: values.image,
                        products: [...values.products],
                    };
                    createInvoice({ variables: { input: data } });
                    // it wil show Failed to fetch because of no server
                }}
            >
                {({ values, setFieldValue, handleChange, handleSubmit }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <InvoiceForm
                            handleChange={handleChange}
                            values={values}
                            setFieldValue={setFieldValue}
                        />
                        <ProductForm
                            handleChange={handleChange}
                            values={values}
                            setFieldValue={setFieldValue}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default CreateInvoice;
