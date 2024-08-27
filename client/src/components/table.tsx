import { Order, columns } from "@/app/columns";
import { DataTable } from "./data-table";

async function fetchOrders(query: string): Promise<Order[]> {
  let fetchURL = "";

  if (query) {
    fetchURL = `http://localhost:5000/api/orders?customer=${query}&status=${query}`;
  } else {
    fetchURL = "http://localhost:5000/api/orders";
  }

  const res = await fetch(fetchURL);
  const data = await res.json();
  return data;
}

export default async function OrdersTable({ query }: { query: string }) {
  const orders = await fetchOrders(query);

  return <DataTable columns={columns} data={orders} />;
}
``