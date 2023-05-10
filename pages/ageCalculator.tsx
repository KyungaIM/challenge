import next from "next";
import Layout from "./components/layout";
import { Fugaz_One } from "next/font/google";
const resultFont = Fugaz_One({ weight: "400", subsets: ["latin"] });
export default function ageCalculator() {
  return (
    <Layout>
      <div className="w-full bg-gray-50 flex center h-800 justify-center items-center ">
        <div className=" w-full sm:w-[500px] bg-white p-8 my-10 rounded-lg rounded-br-[50px] drop-shadow-lg">
          <form className="border-b flex relative pb-8 mb-6 rounded-sm">
            <label htmlFor="day" className="flex flex-col mr-4 text-xs">
              DAY{" "}
              <input
                type="text"
                id="day"
                required
                className=" border w-20 px-2 py-1 mt-1 text-lg font-bold"
              />
            </label>

            <label htmlFor="month" className="flex flex-col mr-4 text-xs">
              MONTH
              <input
                type="text"
                id="month"
                required
                className=" border w-20 px-2 py-1 mt-1 text-lg font-bold"
              />
            </label>

            <label htmlFor="year" className="flex flex-col mr-24 text-xs">
              YEAR
              <input
                type="text"
                id="year"
                required
                className=" border w-20 px-2 py-1 mt-1 text-lg font-bold"
              />
            </label>
            <button className="rounded-full p-3 bg-violet-600 hover:bg-violet-700 text-white absolute right-4 bottom-[-30px] hover:animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
          <p className={`text-3xl text-black ${resultFont.className}`}>
            <span className="text-violet-600">{23}</span>YEARS
          </p>
          <p className={`text-3xl text-black ${resultFont.className}`}>
            <span className="text-violet-600">{23}</span>MONTHS
          </p>
          <p className={`text-3xl text-black ${resultFont.className}`}>
            <span className="text-violet-600">{23}</span>DAYS
          </p>
        </div>
      </div>
    </Layout>
  );
}
