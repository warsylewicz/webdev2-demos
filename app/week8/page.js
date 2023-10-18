"use client";

import { useState } from "react";
import eventsData from "./_data/events.json";
import NewEvent from "./_components/new-event";
import EventList from "./_components/event-list";
import NewEventButton from "./_components/new-event-button";
import Weather from "./_components/weather";
import SignIn from "./_components/sign-in";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // read events from events.json and convert date strings to Date objects
  const [events, setEvents] = useState(
    eventsData.map((event) => ({
      ...event,
      date: new Date(event.date),
    }))
  );

  const { user } = useUserAuth();

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
      <SignIn />
      <Weather />
      {user && <NewEventButton onClick={() => setNewEventOpen(true)} />}

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
