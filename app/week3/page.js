import EventList from "./event-list";
import Weather from "./weather";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
        Community Events
      </h1>
      <EventList />
      <Weather />
    </main>
  );
}
