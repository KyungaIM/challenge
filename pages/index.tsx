import Layout from "./components/layout/layout";
import { listData } from "./components/main/listdata";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Layout>
      <Head>
        <title>front-end challenge with Next.js</title>
      </Head>
      <div className="flex flex-wrap -mx-4 -my-8">
        {listData.map((el, index) => {
          const date = new Date(el.date);
          const month = months[date.getMonth()];

          return (
            <div key={index} className="w-full px-4 py-8 lg:w-1/3 ">
              <Link href={el.link} className="hover:bg-red-500">
                <div className="relative w-full h-[200px] overflow-hidden mb-4 after:invisible hover:after:visible after:block after:absolute after:bg-blue-900/10 after:w-full after:h-full">
                  <Image
                    src={el.image}
                    fill
                    alt="thumnail"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
              <div className="flex flex-col items-start h-full">
                <h2 className="my-2 text-xs font-medium tracking-widest text-blue-500 title-font">
                  <span>{el.level.toUpperCase()}</span>
                  <span className="ml-3 text-slate-500">
                    {month.toUpperCase()} {date.getDate()}
                  </span>
                </h2>
                <Link href={el.link}>
                  <h1 className="mb-3 text-xl font-medium text-gray-900 title-font hover:text-gray-700">
                    {el.title}
                  </h1>
                </Link>
                <ul className="mb-5 leading-relaxed">
                  {el.functions.map((func, index) => {
                    return <li key={index}>- {func}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
