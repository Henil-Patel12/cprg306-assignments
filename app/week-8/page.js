'use client';
import React, { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {user ? (
        <div className="max-w-md w-full space-y-8">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome, {user.displayName}</h1>
          <p className="mt-2 text-center text-sm text-gray-600">Email: {user.email}</p>
          <button 
            onClick={firebaseSignOut} 
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Logout
          </button>
          <br />
            <Link href="/week-8/shopping-list" className="text-indigo-600 hover:text-indigo-500"> 
              Visit Your Shopping List
            </Link>
        </div>
      ) : (
        <button 
          onClick={gitHubSignIn} 
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login Using GitHub
        </button>
      )}
    </div>
  );
};

export default Page;