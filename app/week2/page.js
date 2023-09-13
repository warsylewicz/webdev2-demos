import EventList from "./event-list";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Community Event Planner</h1>
      <EventList />
      <div>
        <h2>Current Weather</h2>
        <p>Temperature: 15°C</p>
        <p>
          <Link href="https://www.theweathernetwork.com/ca/weather/alberta/calgary">
            Weather forecast
          </Link>
        </p>
        <p>
          <Link href="../">Home</Link>
          {/* The advantage over using <a> is that Link provides prefetching and client-side navigation. */}
        </p>
      </div>
    </main>
  );
}
