import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "../components/eventList";
import Form from "../components/Form";
import "./eventsPage.css";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTags, setFilterTags] = useState([]);

  async function getEvents() {
    const API = "http://localhost:8080/events";
    const res = await axios.get(API);
    setEvents(res.data);
  }

  useEffect(() => {
    getEvents();
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.EventTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterTags.length === 0 ||
        filterTags.some((tag) => event.FilterTags.includes(tag)))
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const tag = e.target.value;

    setFilterTags((prevFilterTags) => {
      if (prevFilterTags.includes(tag)) {
        // remove tag if it's already in the array
        return prevFilterTags.filter((prevTag) => prevTag !== tag);
      } else {
        // add tag if it's not in the array
        return [...prevFilterTags, tag];
      }
    });
  };

  const handleUpdate = async (eventId) => {
    const updatedEvent = {
      OrganizerName: "",
      Name: "",
      Location: "",
      EventTitle: "",
      DateTime: "",
      Duration: "",
      Description: "",
      FilterTags: "",
      PictureOptionUpload: null,
      SocialMediaLink: "",
      TicketPrice: "",
      QuantityTickets: "",
    };

    const API = `http://localhost:8080/events/${eventId}`;

    try {
      await axios.put(API, updatedEvent);
      getEvents();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDelete = async (eventId) => {
    const API = `http://localhost:8080/events/${eventId}`;

    try {
      await axios.delete(API);
      // Fetch the updated list of events after successful deletion
      getEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleAddEvent = async (formData) => {
    const API = "http://localhost:8080/events";

    try {
      const res = await axios.post(API, formData);
      setEvents([...events, res.data]);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
      <h2>Events List</h2>

      {/* Search Form */}
      <form>
        <label htmlFor="search">Search Events by Title:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Filter by Tag */}
        <div>
          <label>Filter Events by Tag:</label>
          <div>
            <input
              type="checkbox"
              id="LGBTQ+"
              name="filterTags"
              value="LGBTQ+"
              checked={filterTags.includes("LGBTQ+")}
              onChange={handleFilterChange}
            />
            <label htmlFor="LGBTQ+">LGBTQ+</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="women"
              name="filterTags"
              value="women"
              checked={filterTags.includes("women")}
              onChange={handleFilterChange}
            />
            <label htmlFor="women">Women</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="disabled"
              name="filterTags"
              value="disabled"
              checked={filterTags.includes("disabled")}
              onChange={handleFilterChange}
            />
            <label htmlFor="disabled">Disabled</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="other"
              name="filterTags"
              value="other"
              checked={filterTags.includes("other")}
              onChange={handleFilterChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </form>

      {/* Display Filtered Events */}
      <EventList
        events={filteredEvents || []}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />

      {/* Add Event Form */}
      <Form setEvents={handleAddEvent} />
    </>
  );
}
