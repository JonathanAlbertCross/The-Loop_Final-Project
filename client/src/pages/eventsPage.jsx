import axios from "axios";
import { useState, useEffect } from "react";
import Event from "../components/Event";
import EventList from "../components/eventList";
import Form from "../components/Form";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    const API = "http://localhost:8080/events";
    // const API = 'https://the-loop.onrender.com/events?_id=${params.id}`;
    const res = await axios.get(API);
    setEvents(res.data);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <h2>Events List</h2>
      <Form events={events} setEvents={setEvents} />
      <EventList event={events} />
    </>
  );
}
