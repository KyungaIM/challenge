import next from "next";
import Layout from "./components/layout";
import { useState } from "react";
import { Fugaz_One } from "next/font/google";
const resultFont = Fugaz_One({ weight: "400", subsets: ["latin"] });

export default function AgeCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [modalValue, setModalValue] = useState([0, 0, 0]);

  const validation = () => {
    const dayNum = Number(day);
    const monthNum = Number(month);
    const yearNum = Number(year);
    const lastDay = new Date(Number(year), Number(month), 0).getDate();
    const currentYear = new Date().getFullYear();

    if (0 === dayNum || dayNum > lastDay) {
      setError("알맞은 날짜를 입력하세요");
      return;
    }
    if (monthNum > 12) {
      setError("알맞은 달을 입력하세요");
      return;
    }
    if (yearNum > currentYear) {
      setError("알맞은 연도를 입력하세요");
      return;
    }
    setError("");
    return true;
  };

  return (
    <Layout>
      <div className="w-full bg-gray-50 flex center h-800 justify-center items-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-full sm:w-[500px] bg-white p-8 my-10 rounded-lg rounded-br-[50px] drop-shadow-lg"
        >
          <h1 className="mb-2 text-sm">출생일을 입력하세요</h1>
          <div className="border-b flex relative pb-8 mb-6 rounded-sm">
            <label htmlFor="day" className="flex flex-col mr-4 text-xs">
              DAY
              <input
                type="text"
                id="day"
                className=" border w-20 px-2 py-1 mt-1 text-lg font-bold"
                autoFocus
                onChange={(e) => setDay(e.target.value)}
                value={day}
              />
            </label>

            <label htmlFor="month" className="flex flex-col mr-4 text-xs">
              MONTH
              <input
                type="text"
                id="month"
                className=" border w-20 px-2 py-1 mt-1 text-lg font-bold"
                onChange={(e) => setMonth(e.target.value)}
                value={month}
              />
            </label>

            <label htmlFor="year" className="flex flex-col mr-24 text-xs">
              YEAR
              <input
                type="text"
                id="year"
                className=" border w-20 px-2 py-1 mt-1 text-lg font-bold"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </label>
            <button
              className="rounded-full p-3 bg-blue-500 hover:bg-blue-700 text-white absolute right-4 bottom-[-30px] hover:animate-bounce"
              onClick={() => {
                if (day && month && year) {
                  if (validation()) {
                    // 특정 날짜와 오늘 날짜 생성
                    const fromDate = new Date(`${year}-${month}-${day}`);
                    const today = new Date();

                    // 시간차 계산
                    const timeDiff = Math.abs(
                      today.getTime() - fromDate.getTime()
                    );
                    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    // 연월일 계산
                    const years = Math.floor(diffDays / 365);
                    const months = Math.floor((diffDays % 365) / 30);
                    const days = (diffDays % 365) % 30;

                    setModalValue([days, months, years]);
                    setDay("");
                    setMonth("");
                    setYear("");
                    setOpen(true);
                    setError("");
                  }
                } else {
                  setError("입력란을 모두 채워주세요");
                }
              }}
            >
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
            <p className="absolute left-0 bottom-2 text-xs text-slate-400">
              {error && error}
            </p>
          </div>
          {open && (
            <div>
              <p className={`text-3xl text-black ${resultFont.className}`}>
                <span className="text-blue-500">{modalValue[2]}</span>YEARS
              </p>
              <p className={`text-3xl text-black ${resultFont.className}`}>
                <span className="text-blue-500">{modalValue[1]}</span>MONTHS
              </p>
              <p className={`text-3xl text-black ${resultFont.className}`}>
                <span className="text-blue-500">{modalValue[0]}</span>DAYS
              </p>
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
}
