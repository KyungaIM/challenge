import Link from "next/link";
export default function List() {
  return (
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              May
            </span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">
              3
            </span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
              JUNIOR
            </h2>
            <Link href={"/notification"}>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3 hover:text-gray-700">
                Notifications page
              </h1>
            </Link>
            <ul className="leading-relaxed mb-5">
              <li> - 읽은 상태와 읽지 않은 상태를 구분합니다</li>
              <li>
                - 전체 읽음을 누르면 읽지 않은 알림을 모두 읽음으로 바꿉니다
              </li>
              <li>- 반응형 페이지로 구현합니다</li>
              <li>- hover 및 focus에 인터랙션 요소를 추가합니다</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              May
            </span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">
              5
            </span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
              JUNIOR
            </h2>
            <Link href={"/ageCalculator"}>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3 hover:text-gray-700">
                age calculator
              </h1>
            </Link>
            <ul className="leading-relaxed mb-5">
              <li> - 태어난 이후로 몇년 몇월 며칠이 지났는지 계산합니다</li>
              <li>- 유효성검사를 실행합니다</li>
              <li>- 31일 없는 달을 구분합니다</li>
              <li>- year에는 현재 연도보다 이전 연도만 들어갈 수 있습니다</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              May
            </span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">
              5
            </span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
              NEWBIE
            </h2>
            <Link href={"/accordion"}>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3 hover:text-gray-700">
                FAQ accordion card
              </h1>
            </Link>
            <ul className="leading-relaxed mb-5">
              <li> -아코디언 메뉴를 구현합니다</li>
              <li> -js를 사용하지 않고 구현합니다</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
