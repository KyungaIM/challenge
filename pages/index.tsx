import Layout from "./components/layout/layout";
import { listData } from "./components/main/listdata";
import Link from "next/link";

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
      <div className="flex flex-wrap -mx-4 -my-8">
        {listData.map((el, index) => {
          const date = new Date(el.date);
          const month = months[date.getMonth()];

          return (
            <div key={index} className="py-8 px-4  w-full lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    {month}
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    {date.getDate()}
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
                    {el.level.toUpperCase()}
                  </h2>
                  <Link href={el.link}>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3 hover:text-gray-700">
                      {el.title}
                    </h1>
                  </Link>
                  <ul className="leading-relaxed mb-5">
                    {el.functions.map((func, index) => {
                      return <li key={index}>- {func}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
