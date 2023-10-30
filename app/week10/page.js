"use client";

import { useState, useEffect } from "react";
import NewEvent from "./_components/new-event";
import EventList from "./_components/event-list";
import NewEventButton from "./_components/new-event-button";
import Weather from "./_components/weather";
import SignIn from "./_components/sign-in";
import { useUserAuth } from "./_utils/auth-context";
import { subscribeToEvents, addEvent } from "./_services/event-services";

export default function Page() {
  const { user } = useUserAuth();

  const [events, setEvents] = useState([]);
  const [newEventOpen, setNewEventOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToEvents(setEvents);
    return () => unsubscribe();
  }, []);

  const handleCreateEvent = (event) => {
    event.dateCreated = new Date();
    event.creator = { id: user.uid, name: user.displayName };
    addEvent(event);
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
