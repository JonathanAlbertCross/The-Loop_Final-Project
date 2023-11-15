import axios from "axios";
import { useState } from "react";
import "./Form.css";

export default function Form({ events, setEvents }) {
  const [formData, setFormData] = useState({
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
    TicketPrice: 0,
    QuantityTickets: 0,
  });

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else if (event.target.type === "file") {
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  async function addEvents(event) {
    event.preventDefault();
    const API = "http://localhost:8080/events";
    // const API = "https://the-loop.onrender.com";
    const res = await axios.post(API, formData);
    setEvents([...events, res.data]);
  }

  async function updateEvent(event) {
    event.preventDefault();
    const API = "http://localhost:8080/events";
    // const API = "https://the-loop.onrender.com";
    const res = await axios.post(API, formData);
    setEvents(formData);
  }

  return (
    <form onSubmit={events?.title ? updateEvent : addEvents}>
      <label htmlFor="organizerName">
        Your Name:
        <input
          id="OrganizerName"
          name="OrganizerName"
          type="text"
          onChange={handleChange}
          value={formData.OrganizerName}
        />
      </label>
      <label htmlFor="name">
        Group Name:
        <input
          id="Name"
          name="Name"
          onChange={handleChange}
          value={formData.Name}
        />
      </label>
      <label htmlFor="location">
        Location:
        <input
          id="Location"
          name="Location"
          onChange={handleChange}
          value={formData.Location}
        />
      </label>
      <label htmlFor="title">
        Event Title:
        <input
          id="EventTitle"
          name="EventTitle"
          onChange={handleChange}
          value={formData.EventTitle}
        />
      </label>
      <label htmlFor="dateAndTime">
        Date and Time:
        <input
          name="DateTime"
          type="date"
          onChange={handleChange}
          value={formData.DateTime}
        />
      </label>
      <label htmlFor="duration">
        Duration:
        <input
          id="Duration"
          name="Duration"
          onChange={handleChange}
          value={formData.Duration}
        />
      </label>
      <label htmlFor="description">
        Description:
        <input
          id="Description"
          name="Description"
          type="text"
          onChange={handleChange}
          value={formData.Description}
        />
      </label>
      <label htmlFor="filterTags">
        Tags:
        <select
          id="FilterTags"
          name="FilterTags"
          onChange={handleChange}
          value={formData.FilterTags}
        >
          <option value="">Select a tag</option>
          <option value="LGBT">LGBT</option>
          <option value="women">Women</option>
          <option value="disabled">Disabled</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label htmlFor="pictureOptionUpload">
        Picture:
        <input
          id="PictureOptionUpload"
          name="PictureOptionUpload"
          type="file"
          accept="image/*"
          onChange={handleChange}
          value={formData.PictureOptionUpload}
        />
      </label>
      <label htmlFor="socialMediaLink">
        Socials:
        <input
          id="SocialMediaLink"
          name="SocialMediaLink"
          onChange={handleChange}
          value={formData.SocialMediaLink}
        />
      </label>
      <label htmlFor="ticketPrice">
        Price:
        <input
          id="TicketPrice"
          name="TicketPrice"
          type="number"
          min="1"
          step="any"
          onChange={handleChange}
          value={formData.TicketPrice}
        />
      </label>
      <label htmlFor="quantityTickets">
        Quantity:
        <input
          id="QuantityTickets"
          name="QuantityTickets"
          type="number"
          onChange={handleChange}
          value={formData.QuantityTickets}
        />
      </label>
      <button>Add Event</button>
    </form>
  );
}
