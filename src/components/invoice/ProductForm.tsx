"use client";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { FieldArray } from "formik";
import { Button, Card, Column, Input, Select } from "@/components";
import { Invoice } from "@/lib/utils";
import useInvoiceModal from "@/hooks/useInvoiceModal";

const productsType = [
    "Trips IDs",
    "Flowers",
    "Drinks",
    "Foods",
    "Planes",
    "Airbus",
    "Helicopters",
];
const products = [
    "Falcon885X TBA/LTI",
    "Falcon8X TBA/LTI",
    "Falcon998X TBA/LTI",
    "Falcon1428X TBA/LTI",
    "Falcon6558X TBA/LTI",
];

interface Props {
    values: Invoice;
    handleChange: any;
    setFieldValue(field: string, value: any): void;
}

const ProductForm = ({ values, handleChange, setFieldValue }: Props) => {
    const invoiceModal = useInvoiceModal();

    // subtotal of total product
    const subTotal = values.products.reduce((sum, item) => sum + item.total, 0);
    // total
    const total = subTotal + 2800;

    return (
        <Card py="py-4" margin="mt-6">
            {/* product heading  */}
            <div className="grid grid-cols-7 gap-5 px-2">
                <Column
                    col="col-span-1"
                    justify="justify-start"
                    head
                    name="Products Type"
                    sort
                />
                <Column
                    col="col-span-2"
                    justify="justify-start"
                    head
                    name="Products"
                    sort
                />
                <Column
                    col="col-span-3"
                    justify="justify-start"
                    head
                    name="Description"
                />
                <Column
                    col="col-span-1"
                    justify="justify-start"
                    head
                    name="Total"
                />
            </div>
            <hr className="my-2" />
            {/* product form  */}
            {/* start nested form  */}
            <FieldArray name="products">
                {({ remove, push }) => (
                    <div>
                        {values.products.length > 0 &&
                            values.products.map((product, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-7 gap-5 px-2 mt-4"
                                >
                                    <Column col="col-span-1 w-full">
                                        <Select
                                            placeHolder="Plane"
                                            rounded="rounded-lg"
                                            options={productsType}
                                            name={`products.${index}.productType`}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Column>
                                    <Column col="col-span-2">
                                        <Select
                                            placeHolder="Plane"
                                            rounded="rounded-lg"
                                            options={products}
                                            setFieldValue={setFieldValue}
                                            name={`products.${index}.product`}
                                        />
                                    </Column>
                                    <Column
                                        col="col-span-3"
                                        justify="justify-start"
                                    >
                                        <Input
                                            type="text"
                                            rounded="rounded-lg"
                                            placeHolder="Product for trip Falcon6558X TBA/LTI"
                                            width="w-[80%]"
                                            onChange={handleChange}
                                            value={product.description}
                                            name={`products.${index}.description`}
                                        />
                                    </Column>
                                    <Column col="col-span-1">
                                        <Input
                                            type="number"
                                            rounded="rounded-lg"
                                            placeHolder="11.500"
                                            onChange={handleChange}
                                            value={product.total}
                                            name={`products.${index}.total`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            className="px-2 py-2.5 rounded-md bg-red-500 bg-opacity-30 hover:bg-opacity-20 transition-all text-red-500 cursor-pointer"
                                        >
                                            <AiFillDelete />
                                        </button>
                                    </Column>
                                </div>
                            ))}
                        <button
                            type="button"
                            onClick={() =>
                                push({
                                    productType: "",
                                    product: "",
                                    description: "",
                                    total: "",
                                })
                            }
                            className="flex items-center gap-1 ps-2 my-3 text-[#383FE1]"
                        >
                            <AiOutlinePlus /> Add Product
                        </button>
                    </div>
                )}
            </FieldArray>

            <hr className="my-2" />
            {/* subtotal  */}
            <div className="px-2 grid grid-cols-8 gap-4 my-4">
                <Column
                    col="col-span-7"
                    head
                    name="Subtotal:"
                    justify="justify-end"
                />
                <Column col="col-span-1" name={subTotal} />
                <Column
                    col="col-span-7"
                    head
                    name="TVA:"
                    justify="justify-end"
                />
                <Column col="col-span-1" name="2.800.000" />
            </div>
            <hr className="my-2" />
            {/* total  */}
            <div className="px-2 grid grid-cols-8 gap-4 my-4">
                <Column col="col-span-5" justify="justify-start">
                    <div className="flex gap-3">
                        <Button type="submit" bg="#383FE1" btnText="Save" />
                        <Button
                            type="reset"
                            bg="#383FE1"
                            btnText="Cancle"
                            outline
                        />
                        <Button
                            handleAction={invoiceModal.onOpen}
                            bg="#383FE1"
                            btnText="Download Invoice"
                        />
                    </div>
                </Column>
                <Column
                    col="col-span-2"
                    head
                    textColor="text-[#383FE1]"
                    name="Total:"
                    justify="justify-end"
                />
                <Column
                    col="col-span-1 "
                    textColor="text-[#383FE1]"
                    head
                    name={total}
                />
            </div>
        </Card>
    );
};

export default ProductForm;
