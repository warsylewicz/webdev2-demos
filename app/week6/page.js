"use client";

import { useState } from "react";
import eventsData from "./events.json";
import NewEvent from "./new-event";
import EventList from "./event-list";

export default function Page() {
  // read events from events.json and convert date strings to Date objects
  const [events, setEvents] = useState(
    eventsData.map((event) => ({
      ...event,
      date: new Date(event.date),
    }))
  );

  const [newEventOpen, setNewEventOpen] = useState(false);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleCloseNewEvent = () => {
    setNewEventOpen(false);
  };

  return (
    <main>
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
        Community Events
      </h1>
      <div className="fixed right-16 bottom-16">
        <button
          className="bg-yellow-500 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-2 rounded-full w-20 h-20 flex items-center justify-center"
          onClick={() => setNewEventOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </button>
      </div>

      {newEventOpen && (
        <NewEvent
          onCreateEvent={handleCreateEvent}
          onCloseNewEvent={handleCloseNewEvent}
        />
      )}
      <EventList events={events} />
    </main>
  );
}
