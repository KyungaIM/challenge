import Layout from "./components/layout/layout";
import AccordianAnimation from "./components/accordianAni";
export default function Accordion() {
  return (
    <Layout>
      <main className="flex md:flex-row flex-col ">
        <AccordianAnimation />
        <div className="md:w-1/2 w-full flex flex-col ">
          <details className=" p-6 open:mb-2 border-b ">
            <summary className="text-md leading-6 text-slate-900 font-semibold select-none">
              K-디지털 트레이닝 지원 자격
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              <p>
                1) 국민내일배움카드를 발급받은 경우에만 지원이 가능합니다.
                <br /> 2) 국내 거주자만 수강이 가능합니다. <br />
                3) 4차 산업혁명 선도인력 양성훈련 또는 다른 K-디지털 트레이닝
                훈련과정에 참여한 이력이 있다면, 자비부담금이 발생할 수
                있습니다.
              </p>
            </div>
          </details>

          <details className=" p-6 open:mb-2 border-b ">
            <summary className="text-md leading-6 text-slate-900 font-semibold select-none">
              K-디지털 트레이닝 과정 지원방법
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              <p>
                1) 국민내일배움카드를 발급받은 경우에만 지원이 가능합니다.
                <br /> 2) 국내 거주자만 수강이 가능합니다. <br />
                3) 4차 산업혁명 선도인력 양성훈련 또는 다른 K-디지털 트레이닝
                훈련과정에 참여한 이력이 있다면, 자비부담금이 발생할 수
                있습니다.
              </p>
            </div>
          </details>
          <details className=" p-6 open:mb-2 border-b ">
            <summary className="text-md leading-6 text-slate-900 font-semibold select-none">
              K-디지털 트레이닝 과정 재지원이 가능한가요?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              <p>
                1) 국민내일배움카드를 발급받은 경우에만 지원이 가능합니다.
                <br /> 2) 국내 거주자만 수강이 가능합니다. <br />
                3) 4차 산업혁명 선도인력 양성훈련 또는 다른 K-디지털 트레이닝
                훈련과정에 참여한 이력이 있다면, 자비부담금이 발생할 수
                있습니다.
              </p>
            </div>
          </details>
          <details className=" p-6 open:mb-2 border-b ">
            <summary className="text-md leading-6 text-slate-900 font-semibold select-none">
              수강생 선발 기준이 있나요?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              <p>
                1) 국민내일배움카드를 발급받은 경우에만 지원이 가능합니다.
                <br /> 2) 국내 거주자만 수강이 가능합니다. <br />
                3) 4차 산업혁명 선도인력 양성훈련 또는 다른 K-디지털 트레이닝
                훈련과정에 참여한 이력이 있다면, 자비부담금이 발생할 수
                있습니다.
              </p>
            </div>
          </details>
          <details className=" p-6 open:mb-2 border-b ">
            <summary className="text-md leading-6 text-slate-900 font-semibold select-none">
              K-디지털 트레이닝 과정 중복 지원이 가능한가요?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              <p>
                1) 국민내일배움카드를 발급받은 경우에만 지원이 가능합니다.
                <br /> 2) 국내 거주자만 수강이 가능합니다. <br />
                3) 4차 산업혁명 선도인력 양성훈련 또는 다른 K-디지털 트레이닝
                훈련과정에 참여한 이력이 있다면, 자비부담금이 발생할 수
                있습니다.
              </p>
            </div>
          </details>
        </div>
      </main>
    </Layout>
  );
}
