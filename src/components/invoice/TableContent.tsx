import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { Column } from "@/components";
import { Status } from "@/enums/status.enum";

interface Invoice {
    invoiceNo: string;
    trip: string;
    invoiceDate: string;
    invoiceAmount: string;
    dueBlance: string;
    paymentMethod: string;
    dueDate: string;
    status: string;
}

interface Props {
    invoice: Invoice;
}

const TableContent = ({ invoice }: Props) => {
    // status background color
    const bg =
        invoice.status === Status.UNPAID
            ? "bg-red-500"
            : invoice.status === Status.PAID
            ? "bg-green-500"
            : "bg-blue-500";
    // status text color
    const color =
        invoice.status === Status.UNPAID
            ? "text-red-500"
            : invoice.status === Status.PAID
            ? "text-green-500"
            : "text-blue-500";
    return (
        <div className="py-2 grid grid-cols-10">
            <Column col="col-span-1" name={invoice.invoiceNo} />
            <Column col="col-span-1" name={invoice.trip} />
            <Column col="col-span-1" name={invoice.invoiceDate} />
            <Column col="col-span-1" name={invoice.invoiceAmount} />
            <Column col="col-span-1" name={invoice.dueBlance} />
            <Column col="col-span-2" name={invoice.paymentMethod} />
            <Column col="col-span-1" name={invoice.dueDate} />
            <Column col="col-span-1">
                <div
                    className={`px-3 py-1 w-full text-center text-sm font-medium ${bg} bg-opacity-[0.1] ${color} rounded-full`}
                >
                    {invoice.status}
                </div>
            </Column>
            <Column col="col-span-1">
                <div className="flex items-center justify-center gap-2">
                    <div className="p-2 rounded-md bg-blue-500 bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-all text-blue-500 cursor-pointer">
                        <AiOutlineEdit />
                    </div>
                    <div className="p-2 rounded-md bg-red-500 bg-opacity-[0.1] hover:bg-opacity-[0.2] transition-all text-red-500 cursor-pointer">
                        <AiFillDelete />
                    </div>
                </div>
            </Column>
        </div>
    );
};

export default TableContent;
