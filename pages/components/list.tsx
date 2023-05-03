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
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Notifications page
            </h1>
            <ul className="leading-relaxed mb-5">
              <li> - 읽은 상태와 읽지 않은 상태를 구분합니다</li>
              <li>
                - 전체 읽음을 누르면 읽지 않은 알림을 모두 읽음으로 바꿉니다
              </li>
              <li>- 반응형 페이지로 구현합니다</li>
              <li>- hover 및 focus에 인터랙션 요소를 추가합니다</li>
            </ul>
            <Link href={"/notification"} className="flex">
              바로가기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 -4 26 26"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
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
              4
            </span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-5">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
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
              CATEGORY
            </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Neptune
            </h1>
            <p className="leading-relaxed mb-5">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
