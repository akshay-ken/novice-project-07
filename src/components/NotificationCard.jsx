import avatar from "../assets/images/avatar-anna-kim.webp";
export function NotificationCard() {
  return (
    <section className="flex flex-row mt-6 bg-Navy-50 justify-start items-center gap-x-4 p-4">
      <img src={avatar} className="size-14 self-start" alt="" />
      <div className="flex flex-col">
        <p className="text-xl font-medium text-Gray-500">
          <span className="font-extrabold text-Navy-950">Mark web</span> reacted
          to you recent post{" "}
          <span className="font-bold text-Gray-600"> My post text! </span>
          <div className="w-3 h-3 bg-Red-badge rounded-full animate-pulse inline-block"></div>
        </p>

        <p className="text-lg font-semibold text-Gray-500">1m ago</p>
        <textarea
          value={"tested"}
          className="bg-white my-2 border-Gray-500 rounded-sm text-lg text-Gray-500 font-medium border-2 p-4"
          placeholder="testing"
          id=""
        ></textarea>
      </div>
    </section>
  );
}
