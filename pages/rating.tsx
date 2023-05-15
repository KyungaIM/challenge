import Layout from "./components/layout/layout";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Rating() {
  const rating = [1, 2, 3, 4, 5];
  const [rateNum, setRate] = useState(0);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    console.log(rateNum);
  }, [rateNum]);
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen bg-black mt-[-60px]">
        {finish ? (
          <div className=" flex-col items-center card m-4 max-w-[300px] sm:w-[300px] p-7  flex text-white bg-gradient-to-b from-slate-900 to-gray-800 ">
            <Image src="/servay.svg" alt="Logo" width={80} height={80} />
            <span className="px-4 py-1 my-4 text-xs text-yellow-400 rounded-full bg-white/10 ">
              5점중 {rateNum}점을 주셨습니다
            </span>
            <h1 className="mb-2 text-xl">감사합니다!</h1>
            <p className="px-4 mb-2 text-sm text-center text-white/70">
              귀하의 소중한 의견을 반영하여 더 나은 서비스를 제공하겠습니다.
              설문에 참여해주셔서 감사합니다.
            </p>
            <button
              onClick={() => {
                setRate(0);
                setFinish(false);
              }}
              className="button"
            >
              다시 평가하기
            </button>
          </div>
        ) : (
          <div className=" flex-col items-start card m-4 max-w-[300px] sm:w-[300px] p-7  flex text-white bg-gradient-to-b from-slate-900 to-gray-800 ">
            <span className="p-2 mb-4 text-yellow-400 rounded-full bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h1 className="mb-2 text-xl">저희 어플은 어떠셨나요?</h1>
            <p className="mb-2 text-sm text-white/70">
              귀하의 소중한 의견을 반영하여 더 나은 서비스를 제공하기 위해
              설문조사를 진행하고 있습니다. 많은 참여 부탁드립니다.
            </p>
            <div className="my-2 ml-1">
              {rating.map((el) => (
                <button
                  key={el}
                  value={el}
                  onClick={(e) => setRate(Number(e.currentTarget.value))}
                  className={`w-10 p-2 m-1 rounded-full bg-white/10 text-white/40 hover:text-white/70 hover:bg-white/30 active:bg-white/40 
                  ${rateNum === el && "bg-yellow-500 text-yellow-50"}`}
                >
                  {el}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                if (rateNum) setFinish(true);
              }}
              className="button"
            >
              제출하기
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
