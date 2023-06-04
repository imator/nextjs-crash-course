import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Meta from "@/components/Meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ users }) {
  return (
    <>
      <Meta title="Home Page" keyword="moda" />
      <main className={`${styles.main} ${inter.className}`}>
        <Image
          src="https://images.unsplash.com/photo-1685703204758-c37561dff8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          height={500}
          width={500}
          alt="Moda"
        />
      </main>
    </>
  );
}
