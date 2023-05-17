import Image from "next/image";
import { getTimeSince } from "../../util/timeCalculator";
interface Item {
  img: string;
  name: string;
  info: string;
  date: string;
  new: boolean;
}
export default function NotificationItem({ el }: { el: Item }) {
  return (
    <div
      className={`
      ${el.new ? "bg-blue-50 hover:bg-blue-100" : "hover:bg-gray-50"}
    flex p-4 m-1 rounded `}
    >
      <div className="w-8 h-8 mt-1 mr-3 truncate rounded-full">
        <Image src={el.img} alt="유저이미지" width="40" height="40" />
      </div>
      <div>
        <div>
          <span className="font-bold">{el.name}</span>
          {" " + el.info}
        </div>
        <div className="text-sm text-gray-400">
          {getTimeSince(el.date) + "전"}
        </div>
      </div>
    </div>
  );
}
