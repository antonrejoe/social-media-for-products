'use client'
import React, { useState, useEffect } from "react";
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {Account , Client} from 'appwrite';

export default function Home() {
  const client = new Client().setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string).setEndpoint(process.env.NEXT_PUBLIC_END_PT as string);
  const account = new Account(client);
  const router = useRouter();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const googleLogin = (e:any) => {
    try {
      e.preventDefault();
      account.createOAuth2Session(
        "google",
        "http://localhost:3000/profile",
        "http://localhost:3000/login"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const signUpUser = async (e:any) => {
    e.preventDefault();

    const promise = account.create(
      crypto.randomUUID(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response:any) {
        router.push("/profile"); //success
        response.json();
      },
      function (error:Error) {
        console.log(error);
      }
    );
  };
  return (
  <>
      <div className="signUpItemContainer text-black">
        Anata no
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="moshi moshi"
            onChange={(e) => {
              setuser({
                ...user,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Email</label>

          <input
            id="email"
            name="email"
            type="text"
            placeholder="moshi moshi"
            onChange={(e) => {
              setuser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>

          <input
            id="password"
            name="email"
            type="text"
            placeholder="moshi moshi"
            onChange={(e) => {
              setuser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit" onClick={signUpUser} className="submitBtn">
          Submit{" "}
        </button>
        <button onClick={googleLogin}> google</button>
      </div>

      <Link href="/Login">Already an user ?</Link>
    </>
  );
}
