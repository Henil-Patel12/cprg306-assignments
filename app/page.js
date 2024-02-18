export default function Page() {
  return(
    <main className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center text-red-600" style={{ backgroundColor: 'hsl(0, 0%, 1%)'}}>
      <div className="grid grid-cols-1 items-start text-center mt-20">
        <h1 className="text-4xl font-extrabold mb-3" style={{ backgroundColor: 'hsl(0, 0%, 5%)' }}>CPRG-306: Web Development 2 - Assignment</h1>
        <li className="text-orange-500 hover:text-purple-400 hover:underline mb-3" style={{ backgroundColor: 'hsl(0, 0%, 4%)', borderRadius: '10px', padding: '10px', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
          <a href="/week-2">Assignment Week-2</a>
        </li>
        <li className="text-orange-500 hover:text-purple-400 hover:underline mb-3" style={{ backgroundColor: 'hsl(0, 0%, 4%)', borderRadius: '10px', padding: '10px', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
          <a href="/week-3">Assignment Week-3</a>
        </li>
        <li className="text-orange-500 hover:text-purple-400 hover:underline mb-3" style={{ backgroundColor: 'hsl(0, 0%, 4%)', borderRadius: '10px', padding: '10px', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
          <a href="/week-4">Assignment Week-4</a>
        </li>
        <li className="text-orange-500 hover:text-purple-400 hover:underline mb-3" style={{ backgroundColor: 'hsl(0, 0%, 4%)', borderRadius: '10px', padding: '10px', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
          <a href="/week-5">Assignment Week-5</a>
        </li>
      </div>
    </main>
  );
};