"use client";

import { useState } from "react";
import EventCard from "./event-card";
import Heading from "./heading";
import eventsData from "./events.json";

export default function EventList() {
  const [locationFilter, setLocationFilter] = useState("All");

  // Convert date strings to Date objects
  let events = eventsData.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));

  // [...new Set()] removes duplicates from an array
  let locations = [...new Set(events.map((event) => event.location).sort())];

  if (locationFilter !== "All") {
    events = events.filter((event) => event.location === locationFilter);
  }

  let pastEvents = events.filter((event) => event.date < new Date());
  pastEvents = pastEvents.sort((a, b) => b.date - a.date);

  events = events.sort((a, b) => a.date - b.date);
  events = events.filter((event) => event.date >= new Date());

  return (
    <>
      <div className="text-center">
        <label htmlFor="location">Filter by location:</label>
        <select
          id="location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="bg-sky-950 text-white p-2 font-sans"
        >
          <option value="All">All</option>
          {locations.map((location) => (
            <option value={location} key={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <Heading title="Upcoming Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {events.length === 0 && <p className="text-center">No events found.</p>}
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <Heading title="Past Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastEvents.length === 0 && (
          <p className="text-center">No past events found.</p>
        )}
        {pastEvents.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </>
  );
}
