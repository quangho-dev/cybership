import { Order, columns } from "@/app/columns";
import { DataTable } from "./data-table";
import { BASE_URL } from "../constants"

async function fetchOrders(query: string): Promise<Order[]> {
  let fetchURL = "";

  if (query) {
    fetchURL = `${BASE_URL}/api/orders?customer=${query}&status=${query}`;
  } else {
    fetchURL = `${BASE_URL}/api/orders`;
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