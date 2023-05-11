import Image from "next/image";
import { getTimeSince } from "./../util/timeCalculator";
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
      ${el.new && "bg-blue-50 hover:bg-blue-100"}
    flex p-4 m-1 rounded hover:bg-gray-50`}
    >
      <div className="rounded-full w-8 h-8 mt-1 truncate mr-3">
        <Image src={el.img} alt="유저이미지" width="40" height="40" />
      </div>
      <div>
        <div>
          <span className="font-bold">{el.name}</span>
          {" " + el.info}
        </div>
        <div className="text-gray-400 text-sm">
          {getTimeSince(el.date) + "전"}
        </div>
      </div>
    </div>
  );
}
