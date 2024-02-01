import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <main className="container mx-auto p-4 min-h-screen flex flex-col items-center" style={{  backgroundColor: 'hsl(0, 0%, 2%)' }}>
            <h1 className="text-4xl font-extrabold text-orange-400 bg-gray-900 rounded-md mb-4 mt-9" style={{ borderRadius: '1vh', padding: '1vh', marginTop: '11vh', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;



