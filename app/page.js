import Link from "next/link";

export default function Page() {
  return(
    <main className="container mx-auto p-4 bg-black min-h-screen flex items-center justify-center flex-col text-red-600">
      <h1 className="text-4xl font-extrabold mb-4">CPRG-306: Web Development 2 - Assignment</h1>
      <div className="flex flex-col  justify-center items-center">
        <li className="text-orange-500 hover:text-purple-400 hover:underline">
          <a href="/week-2">Assignment Week-2</a>
        </li>
        <li className="text-orange-500 hover:text--400 hover:underline">
          <a href="/week-3">Assignment Week-3</a>
        </li>
      </div>
    </main>
  );
};