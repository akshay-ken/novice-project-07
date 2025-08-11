import { HeaderSection } from "./HeaderSection";
import { NotificationCard } from "./NotificationCard";

export function MainPage() {
  return (
    <main className="px-[4%] py-[8%] md:px-[20%] md:py-[8%] flex flex-col">
      <HeaderSection />
      <NotificationCard />
    </main>
  );
}
