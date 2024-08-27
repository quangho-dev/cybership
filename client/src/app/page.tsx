import { DataTable } from "@/components/data-table";
import { Order, columns } from "./columns";
import FilterInput from "@/components/filter-input";
import OrdersTable from "@/components/table";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Orders</h1>
        <FilterInput />
        <OrdersTable query={query} />
      </div>
    </section>
  );
}
