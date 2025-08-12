export function NotificationCard({
  img,
  name,
  action,
  post,
  time,
  read,
  comment,
  message,
  unRead,
}) {
  return (
    <section
      className={`flex flex-row mt-6  justify-start items-center gap-x-4 p-4 ${
        read ? "bg-Navy-100" : null
      }`}
      onClick={unRead}
    >
      <img src={img} className="size-14 self-start" alt="" />
      <div className="flex flex-col basis-full">
        <p className="text-xl font-medium text-Gray-500">
          <span className="font-extrabold text-Navy-950"> {name} </span>{" "}
          {action}
          <span className="font-bold text-Gray-600"> {post} </span>
          {read ? (
            <div className="w-3 h-3 bg-Red-badge rounded-full animate-pulse inline-block"></div>
          ) : null}
        </p>

        <p className="text-lg font-semibold text-Gray-500">{time}</p>
        {comment ? (
          <textarea
            value={message}
            readOnly
            className="bg-white my-2 border-Gray-500 rounded-sm text-lg text-Gray-500 font-medium border-2 p-4"
            placeholder="testing"
            id=""
          ></textarea>
        ) : null}
      </div>
    </section>
  );
}
