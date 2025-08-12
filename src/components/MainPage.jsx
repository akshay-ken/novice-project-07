import { HeaderSection } from "./HeaderSection";
import { NotificationCard } from "./NotificationCard";

import mark from "../assets/images/avatar-mark-webber.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";
import { useReducer } from "react";

const initialCardData = [
  {
    img: mark,
    id: "1",
    name: "Mark Webber",
    action: "reacted to your recent post",
    post: "My first tournament today!",
    read: true,
    time: "1m ago",
    comment: false,
    message: "",
  },
  {
    img: angela,
    id: "2",
    name: "Angela Gray",
    action: "followed you",
    post: "",
    time: "5m ago",
    read: true,
    comment: false,
    message: "",
  },
  {
    img: jacob,
    id: "3",
    name: "Jacob Thompson",
    action: "has joined your group",
    post: "Chess Club",
    time: "1 day ago",
    read: true,
    comment: false,
    message: "",
  },
  {
    img: rizky,
    id: "4",
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    post: "",
    time: "5 days ago",
    read: false,
    comment: true,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    img: kimberly,
    id: "5",
    name: "Kimberly Smith",
    action: "commented on your picture",
    post: "",
    time: "1 week ago",
    read: false,
    comment: false,
    message: "",
  },
  {
    img: nathan,
    id: "6",
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: false,
    comment: false,
    message: "",
  },
  {
    img: anna,
    id: "7",
    name: "Anna Kim",
    action: "left the group",
    post: "Chess Club",
    time: "2 weeks ago",
    read: false,
    comment: false,
    message: "",
  },
];

function cardReducer(state, action) {
  if (action.type === "read status") {
    return state.map((item) => {
      if (item.read && item.id === action.payload) {
        return { ...item, read: false };
      }
      return { ...item };
    });
  }
  if (action.type === "allRead") {
    return state.map((item) => {
      if (item.read) {
        return { ...item, read: false };
      }
      return { ...item };
    });
  }
  return state;
}

export function MainPage() {
  const [cardState, dispatch] = useReducer(cardReducer, initialCardData);
  function handleAllRead() {
    dispatch({ type: "allRead" });
  }
  return (
    <main className="px-[4%] py-[8%] md:px-[20%] md:py-[8%] flex flex-col">
      <HeaderSection markAllRead={handleAllRead} />
      {cardState.map((item) => {
        function handleUnread() {
          dispatch({ type: "read status", payload: item.id });
        }
        return (
          <NotificationCard
            key={item.id}
            img={item.img}
            name={item.name}
            action={item.action}
            post={item.post}
            time={item.time}
            read={item.read}
            comment={item.comment}
            message={item.message}
            unRead={handleUnread}
          />
        );
      })}
    </main>
  );
}
