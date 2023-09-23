"use client";
import { useState } from "react";
import { Card, ImageUpload, Input, Select } from "..";
import { IoIosArrowDown } from "react-icons/io";
import { Invoice } from "@/lib/utils";

interface Props {
    values: Invoice;
    handleChange: any;
    setFieldValue(field: string, value: any): void;
}

const InvoiceForm = ({ values, handleChange, setFieldValue }: Props) => {
    // image state
    const [avatar, setAvatar] = useState("");

    const clients = [
        "Mehedi Hasan",
        "Masum Billa",
        "Rakib Hossen",
        "Asad Khan",
        "Rony Ahmed",
    ];
    const trips = ["T2930", "T2940", "T2952", "T2956", "T2990"];

    // upload photo
    const uploadAvatar = (e: any) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result as string);
                setFieldValue("image", reader.result as string);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };
    return (
        <Card px="px-4" py="py-4">
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-2 w-full">
                    <Select
                        placeHolder="Select Client"
                        label="Select"
                        rightIcon={<IoIosArrowDown />}
                        options={clients}
                        name="client"
                        setFieldValue={setFieldValue}
                    />
                    <div className="w-64 mt-6">
                        <Select
                            placeHolder="Select Client"
                            label="Trip"
                            rightIcon={<IoIosArrowDown />}
                            options={trips}
                            name="trip"
                            setFieldValue={setFieldValue}
                        />
                    </div>
                </div>
                <div className="col-span-1 w-full">
                    <Input
                        type="date"
                        placeHolder="Select Date"
                        label="Invoice Date"
                        onChange={handleChange}
                        name="invoiceDate"
                        value={values.invoiceDate}
                    />
                </div>
                <div className="col-span-1 w-full flex justify-end">
                    <ImageUpload
                        avatar={avatar}
                        uploadAvatar={uploadAvatar}
                        setAvatar={setAvatar}
                        label="Plane Image"
                    />
                </div>
            </div>
        </Card>
    );
};

export default InvoiceForm;
