import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { useState } from "react";
import { authOptions } from "./api/auth/authOptions";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"));

export default async function Home() {
  const session = await getServerSession(authOptions);

  //const [isVisible, setIsVisible] = useState(false);

  return (
    <main>
      <h1> Hello {session && <span>{session.user!.name} </span>} </h1>
      <Link href="/users"> Users </Link>
      <ProductCard />
    </main>
  );
}

{
  /** How to generate dynamic meta data */
}
// export async function generateMetaData(): Promise<Metadata>{
//   const product = await fetch('')

//   return{
//     title: "product.title",
//     description: "..."
//   }
// }
