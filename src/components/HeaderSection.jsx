export function HeaderSection({ markAllRead }) {
  return (
    <header className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-start items-center">
        <p className="text-2xl font-bold text-Navy-950">
          Notifications{" "}
          <span className="bg-Blue-badge py-1 px-4 rounded-xl text-Blue-100">
            {" "}
            3{" "}
          </span>
        </p>
      </div>
      <p className="text-lg font-semibold text-Gray-600" onClick={markAllRead}>
        Mark all as read
      </p>
    </header>
  );
}
