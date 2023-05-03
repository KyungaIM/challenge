import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/layout";
import List from "./components/list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <List />
    </Layout>
  );
}
