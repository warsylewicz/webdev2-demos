"use client";

import { useState, useEffect } from "react";
import Heading from "../_components/heading";
import { getEvent } from "../_services/event-services";

export default function Page({ params }) {
  const [event, setEvent] = useState({});

  const fetchEvent = async () => {
    const event = await getEvent(params.id);
    setEvent(event);
  };

  useEffect(() => {
    fetchEvent();
  }, [params.id]);

  if (!event) {
    return (
      <main className=" text-white p-6">
        <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
          Community Event Details
        </h1>
        <div className="border border-blue-500 bg-blue-800 p-4 m-2 rounded-lg">
          <Heading title={"Event Not Found"} />
        </div>
      </main>
    );
  }

  return (
    <main className=" text-white p-6">
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
        Community Event Details
      </h1>
      <div className="border border-blue-500 bg-blue-800 p-4 m-2 rounded-lg">
        {event ? (
          <>
            <Heading title={"Event: " + event.name} />
            <p className="text-yellow-400 font-bold">
              Date:{" "}
              <span className="font-normal text-white">
                {event.date?.toDateString()}
              </span>
            </p>
            <p className="text-yellow-400 font-bold">
              Location:{" "}
              <span className="font-normal text-white">{event.location}</span>
            </p>
            <p className="text-yellow-400 font-bold">
              Description:{" "}
              <span className="font-normal text-white">
                {event.description}
              </span>
            </p>
            <p className="text-yellow-400 font-bold">
              Created by:{" "}
              <span className="font-normal text-white">
                {event.creator?.name}
              </span>
            </p>
          </>
        ) : (
          <Heading title={"Event Not Found"} />
        )}
      </div>
    </main>
  );
}
