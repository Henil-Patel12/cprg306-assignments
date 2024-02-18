export default function Item( {id ,name, quantity, category} ) {
  return (
    <div className="mb-4 p-4 border bg-blue-200 text-blue-900 max-w-md">
      <p className="text-lg font-semibold divide-y divide-blue-300">{name}</p>
      <p className="text-blue-300">Buy {quantity} in {category}</p>
    </div>
  );
};