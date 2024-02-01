import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <main className="container mx-auto p-4 min-h-screen flex flex-col items-center" style={{  backgroundColor: 'hsl(0, 0%, 2%)' }}>
            <h1 className="text-4xl font-extrabold text-blue-200 bg-gray-800 rounded-md mb-4 mt-9" style={{ marginTop: '15vh' }}>Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;



