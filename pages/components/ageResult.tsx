import { Fugaz_One } from "next/font/google";
const resultFont = Fugaz_One({ weight: "400", subsets: ["latin"] });

interface Props {
  year: number;
  month: number;
  day: number;
}
export default function AgeResult({ year, month, day }: Props) {
  return (
    <>
      <p className={`text-3xl text-black ${resultFont.className}`}>
        <span className="text-violet-600">{year}</span>YEARS
      </p>
      <p className={`text-3xl text-black ${resultFont.className}`}>
        <span className="text-violet-600">{month}</span>MONTHS
      </p>
      <p className={`text-3xl text-black ${resultFont.className}`}>
        <span className="text-violet-600">{day}</span>DAYS
      </p>
    </>
  );
}
