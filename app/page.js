import Link from "next/link";

export default function Page() {
  return(
    <main className="container mx-auto p-4 bg-black-200 min-h-screen flex items-center justify-center flex-col text-red-600">
      <h1 className="text-4xl font-extrabold mb-8">CPRG-306: Web Development 2 - Assignment</h1>
      <div className="flex justify-center items-center">
        <Link href="week-2" className="text-orange-500 hover:text-green-500 transition duration-500">Assignment week-2</Link>
      </div>
    </main>
  );
};