import Layout from "./components/layout/layout";
import NotificationItem from "./components/notificationItem";
import { useState } from "react";

export default function Notification() {
  const mock = [
    {
      name: "조정구",
      img: "https://images.pexels.com/photos/15031661/pexels-photo-15031661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "친구신청을 하였습니다.",
      date: "2023.03.16",
      new: true,
    },
    {
      name: "봉미선",
      img: "https://images.pexels.com/photos/5231184/pexels-photo-5231184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "친구신청을 거절 하였습니다.",
      date: "2023.03.12",
      new: true,
    },
    {
      name: "김민수",
      img: "https://images.pexels.com/photos/16160789/pexels-photo-16160789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "새로운 게시물을 업데이트했습니다.",
      date: "2023.02.24",
      new: true,
    },
    {
      name: "장지연",
      img: "https://images.pexels.com/photos/16332097/pexels-photo-16332097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "친구신청을 수락하였습니다.",
      date: "2023.02.21",
      new: false,
    },
    {
      name: "최태섭",
      img: "https://images.pexels.com/photos/16524597/pexels-photo-16524597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "새로운 게시물을 업데이트했습니다.",
      date: "2023.01.23",
      new: false,
    },
    {
      name: "김나리",
      img: "https://images.pexels.com/photos/16218254/pexels-photo-16218254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "새로운 게시물을 업데이트했습니다.",
      date: "2023.01.04",
      new: false,
    },
  ];

  const [data, setData] = useState(mock);
  const readAll = () => {
    const newdata = data.map((item) => {
      if (item.new === true) {
        return { ...item, new: false };
      }
      return item;
    });
    setData(newdata);
  };
  return (
    <Layout>
      <main>
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-lg">
            Notification
            <span className="p-1 px-2 rounded bg-blue-500 text-white text-sm ml-3">
              {data.filter((el) => el.new === true).length}
            </span>
          </h1>
          <div>
            <button onClick={readAll}>모두 읽음</button>
          </div>
        </div>
        {data.map((el, index) => {
          return <NotificationItem el={el} key={index} />;
        })}
      </main>
    </Layout>
  );
}
