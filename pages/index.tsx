import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1>구현챌린지</h1>
    </Layout>
  );
}
