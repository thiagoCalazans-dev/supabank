import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { Box } from "@/components/ui/Box";
import { Pagination } from "@/components/ui/Pagination";

const transactions = [
  {
    id: 1,
    date: new Date("01/01/2023"),
    description: "Salary",
    value: 3000.65,
    type: "Debit",
  },
  {
    id: 2,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 3,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 4,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 5,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 6,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 7,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 8,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 9,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
  {
    id: 10,
    date: new Date("02/01/2023"),
    description: "Burguer",
    value: 50.95,
    type: "Credit",
  },
];

const total = transactions
  .reduce((acc, curr) => {
    if (curr.type === "Debit") {
      return acc + curr.value;
    } else if (curr.type === "Credit") {
      return acc - curr.value;
    }
    return acc;
  }, 0)
  .toFixed(2);

export default function Dashboard() {
  return (
    <>
      <div className="w-full overflow h-full">
        <div className="flex justify-between items-end mb-8 pr-5">
          <H1 className="uppercase text-center w-fit border-2 p-3 border-emerald-800">
            supabank
          </H1>
          <span>Balance: R$ {total}</span>
        </div>
        <div className="rounded-md border-zinc-700   overflow-hidden">
          <table className="table-auto w-full min-h-fit border-collapse  p-0 even:bg-zinc-100 dark:even:bg-zinc-800 ">
            <thead>
              <tr className="m-0 border-emerald-800 rounded-t-md bg-emerald-800 overflow-hidden">
                <th className="  px-4 py-2 text-left font-bold  [&[align=center]]:text-center [&[align=right]]:text-right">
                  Date
                </th>
                <th className="  px-4 py-2 text-left font-bold  [&[align=center]]:text-center [&[align=right]]:text-right">
                  Description
                </th>
                <th className="  px-4 py-2 text-left font-bold  [&[align=center]]:text-center [&[align=right]]:text-right">
                  Value
                </th>
                <th className="hidden sm:block  px-4 py-2 text-left font-bold  [&[align=center]]:text-center [&[align=right]]:text-right">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr
                    key={transaction.id}
                    className=" p-0 even:bg-zinc-100  dark:even:bg-zinc-800"
                  >
                    <td className=" px-4 py-2 text-left  [&[align=center]]:text-center [&[align=right]]:text-right">
                      {String(transaction.date)}
                    </td>
                    <td className=" px-4 py-2 text-left  [&[align=center]]:text-center [&[align=right]]:text-right">
                      {transaction.description}
                    </td>
                    {transaction.type === "Credit" ? (
                      <td className="text-red-700  px-4 py-2 text-left  [&[align=center]]:text-center [&[align=right]]:text-right">
                        {transaction.value}
                      </td>
                    ) : (
                      <td className=" px-4 py-2 text-left  [&[align=center]]:text-center [&[align=right]]:text-right">
                        {transaction.value}
                      </td>
                    )}

                    <td className="hidden sm:table-cell  px-4 py-2 text-left  [&[align=center]]:text-center [&[align=right]]:text-right">
                      {transaction.type}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </>
  );
}
