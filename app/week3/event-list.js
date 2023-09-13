import EventCard from "./event-card";
import Heading from "./heading";

export default function EventList() {
  const event1 = {
    name: "Community Picnic",
    date: "September 10, 2023",
    location: "Central Park",
  };
  const event2 = {
    name: "Charity Fun Run",
    date: "October 15, 2023",
    location: "City Sports Complex",
  };
  const event3 = {
    name: "Holiday Food Drive",
    date: "November 25, 2023",
    location: "Community Center",
  };
  const event4 = {
    name: "New Year's Eve Concert",
    date: "December 31, 2023",
    location: "Downtown Plaza",
  };
  const event5 = {
    name: "Winter Art Festival",
    date: "January 20, 2024",
    location: "City Art Gallery",
  };

  return (
    <>
      <Heading title="Upcoming Events" />
      <EventCard
        name={event1.name}
        date={event1.date}
        location={event1.location}
      />
      <EventCard
        name={event2.name}
        date={event2.date}
        location={event2.location}
      />
      <EventCard
        name={event3.name}
        date={event3.date}
        location={event3.location}
      />
      <EventCard
        name={event4.name}
        date={event4.date}
        location={event4.location}
      />
      <EventCard
        name={event5.name}
        date={event5.date}
        location={event5.location}
      />
    </>
  );
}
