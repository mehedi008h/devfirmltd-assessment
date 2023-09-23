"use client";
import { Button, Column } from "@/components";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import useInvoiceModal from "@/hooks/useInvoiceModal";
import Modal from "./Modal";

const InvoiceModal = () => {
    const invoiceModal = useInvoiceModal();
    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const action = (
        <>
            <Button
                handleAction={handlePrint}
                bg="#383FE1"
                outline
                btnText="Print"
            />
            <Button
                handleAction={handlePrint}
                bg="#383FE1"
                btnText="Download Invoice"
            />
        </>
    );

    const body = (
        <div id="report" ref={componentRef} className="w-full py-5">
            {/* address section  */}
            <div className="flex justify-between items-center px-6">
                <div>
                    <h1 className="text-xl font-semibold">
                        Invoice No: #{" "}
                        <span className="text-[#84878B]">1232</span>
                    </h1>
                    <h1 className="text-base font-semibold mt-2">
                        Date:
                        <span className="text-[#84878B]"> 07/09/2022</span>
                    </h1>
                </div>
                {/* logo  */}
                <h1
                    className="text-3xl"
                    style={{
                        color: "rgba(0, 0, 0, 0.50)",
                    }}
                >
                    Logo
                </h1>
                <div className="text-end">
                    {[
                        " 1474 Avenue Kwame",
                        "NKRUMAH 10 BP 13395",
                        "10 Ouagadougou, Burkina Faso",
                        "finance@lizetransport.com",
                        "+1 (226) 50 272383",
                    ].map((address) => (
                        <h3
                            key={address}
                            className="text-base font-normal text-[#84878B]"
                        >
                            {address}
                        </h3>
                    ))}
                </div>
            </div>
            <hr className="my-5" />
            {/* invoice to  */}
            <div className="flex justify-between items-center px-6">
                <div>
                    <h1 className="text-base font-semibold">Invoice To:</h1>
                    {[
                        "John Doe",
                        "Lize Transport Organization",
                        "+1 (226) 50 272383",
                    ].map((address) => (
                        <h3
                            key={address}
                            className="text-base font-normal text-[#84878B]"
                        >
                            {address}
                        </h3>
                    ))}
                </div>

                <div className="text-end">
                    {[
                        " 1474 Avenue Kwame",
                        "NKRUMAH 10 BP 13395",
                        "10 Ouagadougou, Burkina Faso",
                        "finance@lizetransport.com",
                    ].map((address) => (
                        <h3
                            key={address}
                            className="text-base font-normal text-[#84878B]"
                        >
                            {address}
                        </h3>
                    ))}
                </div>
            </div>

            {/* products  */}
            <div className="grid grid-cols-10 gap-4 my-5 border-t border-b py-3 px-6">
                <Column
                    col="col-span-2"
                    name="Products"
                    sort
                    head
                    justify="justify-start"
                />
                <Column
                    col="col-span-2"
                    name="Description"
                    head
                    justify="justify-start"
                />
                <Column
                    col="col-span-2"
                    name="Reservation"
                    sort
                    head
                    justify="justify-start"
                />
                <Column
                    col="col-span-2"
                    name="Trip"
                    head
                    justify="justify-start"
                />
                <Column
                    col="col-span-2"
                    name="Total"
                    head
                    justify="justify-start"
                />
            </div>
            <div className="my-5 px-6">
                {[1, 2, 3].map((product) => (
                    <div key={product} className="grid grid-cols-10 gap-4 my-3">
                        <Column
                            col="col-span-2"
                            name="Products"
                            justify="justify-start"
                        />
                        <Column
                            col="col-span-2"
                            name="Description"
                            justify="justify-start"
                        />
                        <Column
                            col="col-span-2"
                            name="Reservation"
                            justify="justify-start"
                        />
                        <Column
                            col="col-span-2"
                            name="Trip"
                            justify="justify-start"
                        />
                        <Column
                            col="col-span-2"
                            name="Total"
                            justify="justify-start"
                        />
                    </div>
                ))}
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-8 gap-4 px-6">
                <Column
                    col="col-span-7"
                    head
                    name="Subtotal :"
                    justify="justify-end"
                />
                <Column
                    col="col-span-1"
                    name="1111.000"
                    justify="justify-end"
                />
                <Column
                    col="col-span-7"
                    head
                    name="TVA :"
                    justify="justify-end"
                />
                <Column
                    col="col-span-1"
                    name="1111.000"
                    justify="justify-end"
                />
            </div>
            <hr className="my-3" />
            <div className="grid grid-cols-8 gap-4 px-6">
                <Column
                    col="col-span-7"
                    head
                    name="Total :"
                    justify="justify-end"
                    textColor="text-[#383FE1]"
                />
                <Column
                    col="col-span-1"
                    name="1111.000"
                    justify="justify-end"
                    head
                    textColor="text-[#383FE1]"
                />
            </div>
            <hr className="my-3" />
            <h3 className="text-center text-base font-normal text-[#84878B]">
                Name of company
            </h3>
        </div>
    );

    return (
        <Modal
            isOpen={invoiceModal.isOpen}
            action={action}
            onClose={invoiceModal.onClose}
            body={body}
        />
    );
};

export default InvoiceModal;
