import React, { useState } from "react";
import EventCreation from "./EventCreation";
import Gallery from "./Gallery";

const EventManager = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <>
      <EventCreation onCreateEvent={addEvent} />
      <Gallery events={events} />
    </>
  );
};

export default EventManager;
