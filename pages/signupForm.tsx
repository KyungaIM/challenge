import { text } from "stream/consumers";
import Layout from "./components/layout/layout";
import { useState } from "react";
export default function SignupForm() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen text-white bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-col mx-4 md:mx-20 lg:flex-row lg:justify-center lg:items-center">
          <div className="md:mr-10 lg:w-[400px]">
            <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">
              현직 개발자들의 코드를 배우세요
            </h1>
            <p className="mb-10 lg:mb-0">
              경력 개발자들이 문제를 해결하는 과정을 실시간으로 확인할 수
              있어요. 완성된 코드를 보는 것도 중요하지만 개발자들이 왜 그렇게
              코드를 작성했는지 이해하는 것이 훨씬 더 중요합니다.
            </p>
          </div>
          <div>
            <button className="w-full p-4 mb-4 bg-green-500 border-green-500 rounded-lg shadow-lg hover:text-green-500 hover:bg-white active:bg-green-100">
              <p className="font-bold ">7일간 무료로 사용해보세요</p>{" "}
              <span className="text-sm">이후에 매달 20$씩 자동결제됩니다.</span>
            </button>
            <form className="text-gray-600 card lg:w-[400px]">
              <input
                placeholder="이름"
                type="text"
                className="w-full p-3 mb-3 border rounded-lg outline-0 focus:ring-4 focus:border-blue-700"
                autoFocus
              ></input>
              <input
                placeholder="닉네임"
                type="text"
                className="w-full p-3 mb-3 border rounded-lg outline-0 focus:ring-4 focus:border-blue-700"
              ></input>
              <input
                placeholder="이메일"
                type="email"
                className="w-full p-3 mb-3 border rounded-lg outline-0 focus:ring-4 focus:border-blue-700"
              ></input>
              <input
                placeholder="비밀번호"
                type="password"
                className="w-full p-3 mb-3 border rounded-lg outline-0 focus:ring-4 focus:border-blue-700"
              ></input>
              <button className="button" type="submit">
                가입하기
              </button>
              <p className="mt-4 text-xs text-center">
                가입하기 버튼을 클릭하시면{" "}
                <button className="text-red-400">이용약관</button>에 동의하는
                것으로 간주합니다
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
