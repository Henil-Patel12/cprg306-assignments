import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <main className="container mx-auto p-4  min-h-screen flex flex-col items-center justify-center bg-gray-200">
            <h1 className="text-4xl font-extrabold mb-8 text-red-600">Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;