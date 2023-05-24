"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Account, Client } from "appwrite";
export default function Page() {
  const router = useRouter();

  const client = new Client()
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string)
    .setEndpoint(process.env.NEXT_PUBLIC_END_PT as string);
  const account = new Account(client);

  const googleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    account.createOAuth2Session("google", "http://localhost:4000/profile");
  };

  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e: React.MouseEvent) => {
    try {
      await account.createEmailSession(user.email, user.password);
      router.push("/profile");
      console.log(e);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="login_container">
        <div>Login</div>

        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setuser({
              ...user,
              email: e.target.value,
            });
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setuser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <button onClick={loginUser} className="login_btn">
          Submit
        </button>
        <button onClick={googleLogin}>google</button>
      </div>
      <Link href="/signup">Don't have an account ?</Link>
    </main>
  );
}
