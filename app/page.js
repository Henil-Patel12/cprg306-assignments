  export default function Page() {
    return(
      <main className="container mx-auto p-4 min-h-screen flex items-center justify-center flex-col text-red-600"style={{  backgroundColor: 'hsl(0, 0%, 1%)' }}>
        <h1 className="text-4xl font-extrabold mb-4"style={{  backgroundColor: 'hsl(0, 0%, 4%)' }}>CPRG-306: Web Development 2 - Assignment</h1>
        <div>
          <li className="text-orange-500 hover:text-purple-400 hover:underline"style={{  backgroundColor: 'hsl(0, 0%, 4%)' }} >
            <a href="/week-2">Assignment Week-2</a>
          </li>
          <li className="text-orange-500 hover:text-purple-400 hover:underline"style={{  backgroundColor: 'hsl(0, 0%, 4%)' }}>
            <a href="/week-3">Assignment Week-3</a>
          </li>
        </div>
      </main>
    );
  };