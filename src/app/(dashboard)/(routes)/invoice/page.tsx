"use client";
import { Button, Heading, Table } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Invoice = () => {
    const router = useRouter();
    const handleCreateInvoice = () => {
        router.push("/invoice/new");
    };
    return (
        <div>
            <div className="my-3">
                <Heading title="Invoices" subtitle="Invoices">
                    <Button
                        icon={<AiOutlinePlusCircle size={21} />}
                        bg="#383FE1"
                        btnText="Add Invoice"
                        handleAction={handleCreateInvoice}
                    />
                </Heading>
            </div>
            <div className="my-4">
                <Table />
            </div>
        </div>
    );
};

export default Invoice;
