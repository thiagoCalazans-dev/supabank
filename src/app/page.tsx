import { H1 } from "@/components/typography/H1";
import { Pagination } from "@/components/ui/Pagination";
import { createClient } from "@/lib/supabase-server";

export default async function Home() {
  const supabase = createClient();
  const { data: transactions } = await supabase.from("transactions").select();

  console.log(transactions);

  const total = transactions
    ?.reduce((acc, curr) => {
      if (curr.type === "Debit") {
        return acc + curr.value;
      } else if (curr.type === "Credit") {
        return acc - curr.value;
      }
      return acc;
    }, 0)
    .toFixed(2);

  return (
    <>
      <div className="w-full overflow h-full">
        <div className="flex justify-between items-end mb-8 pr-5">
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
              {transactions?.map((transaction) => {
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
