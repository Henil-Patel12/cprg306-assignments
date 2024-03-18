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
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <br />
          <Link href="shopping-list">
            Visit Your Shopping List
          </Link>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Login Using  GitHub</button>
      )}
    </div>
  );
};

export default Page;
