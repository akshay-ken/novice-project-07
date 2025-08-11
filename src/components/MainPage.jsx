import { HeaderSection } from "./HeaderSection";
import { NotificationCard } from "./NotificationCard";

import mark from "../assets/images/avatar-mark-webber.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";

const cardData = [
  {
    img: mark,
    name: "Mark Webber",
    action: "reacted to your recent post",
    post: "My first tournament today!",
    read: false,
    time: "1m ago",
    comment: false,
    message: "",
  },
  {
    img: angela,
    name: "Angela Gray",
    action: "followed you",
    post: "",
    time: "5m ago",
    read: false,
    comment: false,
    message: "",
  },
  {
    img: jacob,
    name: "Jacob Thompson",
    action: "has joined your group",
    post: "Chess Club",
    time: "1 day ago",
    read: false,
    comment: false,
    message: "",
  },
  {
    img: rizky,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    post: "",
    time: "5 days ago",
    read: true,
    comment: true,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    img: kimberly,
    name: "Kimberly Smith",
    action: "commented on your picture",
    post: "",
    time: "1 week ago",
    read: true,
    comment: false,
    message: "",
  },
  {
    img: nathan,
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
    comment: false,
    message: "",
  },
  {
    img: anna,
    name: "Anna Kim",
    action: "left the group",
    post: "Chess Club",
    time: "2 weeks ago",
    read: true,
    comment: false,
    message: "",
  },
];

export function MainPage() {
  return (
    <main className="px-[4%] py-[8%] md:px-[20%] md:py-[8%] flex flex-col">
      <HeaderSection />
      <NotificationCard />
    </main>
  );
}
