import { TableContent, TableHeading } from "@/components";

const invoices = [
    {
        invoiceNo: "I909112",
        trip: "T901122",
        invoiceDate: "23/08/2022",
        invoiceAmount: "13.500.000",
        dueBlance: "4.500.000",
        paymentMethod: "ACH",
        dueDate: "01/31/2023",
        status: "Cancelled",
    },
    {
        invoiceNo: "I909112",
        trip: "T901122",
        invoiceDate: "23/08/2022",
        invoiceAmount: "13.500.000",
        dueBlance: "4.500.000",
        paymentMethod: "ACH",
        dueDate: "01/31/2023",
        status: "Unpaid",
    },
    {
        invoiceNo: "I909112",
        trip: "T901122",
        invoiceDate: "23/08/2022",
        invoiceAmount: "13.500.000",
        dueBlance: "4.500.000",
        paymentMethod: "ACH",
        dueDate: "01/31/2023",
        status: "Paid",
    },
    {
        invoiceNo: "I909112",
        trip: "T901122",
        invoiceDate: "23/08/2022",
        invoiceAmount: "13.500.000",
        dueBlance: "4.500.000",
        paymentMethod: "ACH",
        dueDate: "01/31/2023",
        status: "Cancelled",
    },
    {
        invoiceNo: "I909112",
        trip: "T901122",
        invoiceDate: "23/08/2022",
        invoiceAmount: "13.500.000",
        dueBlance: "4.500.000",
        paymentMethod: "ACH",
        dueDate: "01/31/2023",
        status: "Paid",
    },
    {
        invoiceNo: "I909112",
        trip: "T901122",
        invoiceDate: "23/08/2022",
        invoiceAmount: "13.500.000",
        dueBlance: "4.500.000",
        paymentMethod: "ACH",
        dueDate: "01/31/2023",
        status: "Unpaid",
    },
    {
        invoiceNo: "I909112",
        trip: "T901122",
        invoiceDate: "23/08/2022",
        invoiceAmount: "13.500.000",
        dueBlance: "4.500.000",
        paymentMethod: "ACH",
        dueDate: "01/31/2023",
        status: "Paid",
    },
];

const Table = () => {
    return (
        <div className="bg-white py-4 rounded-lg">
            <TableHeading />
            <div className="mt-2 flex flex-col">
                {invoices.map((invoice, i) => (
                    <TableContent key={i} invoice={invoice} />
                ))}
            </div>
        </div>
    );
};

export default Table;
