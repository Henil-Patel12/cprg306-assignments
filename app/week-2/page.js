import StudentInfo from "./studen-info"

export default function Page() {
    return (
      <main className="container mx-auto p-4 bg-black-300 min-h-screen flex items-center justify-center flex-col text-orange-500">
        <h1 className="text-4xl font-extrabold mb-8">Shopping List</h1>
        <div className="flex justify-center items-center">
          <StudentInfo />
        </div>
      </main>
    );
}