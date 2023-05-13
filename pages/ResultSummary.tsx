import Layout from "./components/layout/layout";
export default function ResultSummary() {
  const data = {
    name: "kyunga",
    action: 30,
    memory: 70,
    verbal: 80,
    visual: 90,
  };

  const myAverage = (data.action + data.memory + data.verbal + data.visual) / 4;
  return (
    <Layout>
      <div className="md:flex md:justify-center">
        <div className="card md:w-[600px] p-0 md:flex">
          <div className="text-center text-white card bg-gradient-to-r from-sky-500 to-blue-500 md:w-1/2 md:flex md:flex-col md:justify-center">
            <h1 className="text-lg">Your Result</h1>
            <div className="inline-block w-24 h-24 p-4 m-2 mx-auto rounded-full bg-gradient-to-b from-blue-800">
              <p className="mt-1 text-4xl">{Math.floor(myAverage)}</p>
              <p className="text-xs opacity-60">of 100</p>
            </div>
            <div>
              <p className="mt-2 text-lg">Great!</p>
              <p className="text-sm max-w-[300px] m-auto mb-2 opacity-80">
                you scored higher than 65% of the people who have taken thede
                tests.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 m-4 md:w-1/2">
            <h1 className="my-4 text-lg font-semibold text-gray-500">
              Summmary
            </h1>
            <div className="flex justify-between w-full p-3 mb-2 bg-red-50 rounded-xl">
              <h2 className="flex text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                Reaction
              </h2>
              <p className="text-gray-400">
                <span className="font-bold text-gray-600">{data.action}</span> /
                100
              </p>
            </div>
            <div className="flex justify-between w-full p-3 mb-2 bg-yellow-50 rounded-xl">
              <h2 className="flex text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Memory
              </h2>
              <p className="text-gray-400">
                <span className="font-bold text-gray-600">{data.memory}</span> /
                100
              </p>
            </div>
            <div className="flex justify-between w-full p-3 mb-2 bg-green-50 rounded-xl">
              <h2 className="flex text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                Verbal
              </h2>
              <p className="text-gray-400">
                <span className="font-bold text-gray-600">{data.verbal}</span> /
                100
              </p>
            </div>
            <div className="flex justify-between w-full p-3 mb-2 bg-sky-50 rounded-xl">
              <h2 className="flex text-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Visual
              </h2>
              <p className="text-gray-400">
                <span className="font-bold text-gray-600">{data.visual}</span> /
                100
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
