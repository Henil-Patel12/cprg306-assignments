import ItemList from "./item-list";

export default function Page () {
  return (
    <main className="p-8 text-blue-900">
      <h1 className="text-4xl font-semibold mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};