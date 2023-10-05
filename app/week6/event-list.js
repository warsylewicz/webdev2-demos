"use client";

import { useState } from "react";
import EventCard from "./event-card";
import Heading from "./heading";

export default function EventList({ events }) {
  const [locationFilter, setLocationFilter] = useState("All");

  // [...new Set()] removes duplicates from an array
  let locations = [...new Set(events.map((event) => event.location).sort())];

  let futureEvents = events
    .filter((event) => event.date >= new Date())
    .sort((a, b) => a.date - b.date);
  let pastEvents = events
    .filter((event) => event.date < new Date())
    .sort((a, b) => b.date - a.date);

  if (locationFilter !== "All") {
    futureEvents = futureEvents.filter(
      (event) => event.location === locationFilter
    );
    pastEvents = pastEvents.filter(
      (event) => event.location === locationFilter
    );
  }

  return (
    <>
      <div className="text-center">
        <label htmlFor="location">Filter by location:</label>
        <select
          id="location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="bg-blue-950 text-white p-2 font-sans"
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
        {futureEvents.length === 0 && (
          <p className="text-center">No events found.</p>
        )}
        {futureEvents.map((event) => (
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
