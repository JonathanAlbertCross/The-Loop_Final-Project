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
    <form onSubmit={addEvents}>
      <label htmlFor="OrganizerName">
        Your Name:
        <input
          id="OrganizerName"
          name="OrganizerName"
          type="text"
          onChange={handleChange}
          value={formData.OrganizerName}
        />
      </label>
      <label htmlFor="Name">
        Group Name:
        <input
          id="Name"
          name="Name"
          onChange={handleChange}
          value={formData.Name}
        />
      </label>
      <label htmlFor="Location">
        Location:
        <input
          id="Location"
          name="Location"
          onChange={handleChange}
          value={formData.Location}
        />
      </label>
      <label htmlFor="EventTitle">
        Event Title:
        <input
          id="EventTitle"
          name="EventTitle"
          onChange={handleChange}
          value={formData.EventTitle}
        />
      </label>
      <label htmlFor="DateTime">
        Date and Time:
        <input
          name="DateTime"
          type="date"
          onChange={handleChange}
          value={formData.DateTime}
        />
      </label>
      <label htmlFor="Duration">
        Duration:
        <input
          id="Duration"
          name="Duration"
          onChange={handleChange}
          value={formData.Duration}
        />
      </label>
      <label htmlFor="Description">
        Description:
        <input
          id="Description"
          name="Description"
          type="text"
          onChange={handleChange}
          value={formData.Description}
        />
      </label>
      <div>
        <label>Tags:</label>
        <div>
          <input
            type="checkbox"
            id="LGBT"
            name="LGBT"
            onChange={handleChange}
            checked={formData.LGBT}
          />
          <label htmlFor="LGBT">LGBT</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="women"
            name="women"
            onChange={handleChange}
            checked={formData.women}
          />
          <label htmlFor="women">Women</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="disabled"
            name="disabled"
            onChange={handleChange}
            checked={formData.disabled}
          />
          <label htmlFor="disabled">Disabled</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="BAME"
            name="BAME"
            onChange={handleChange}
            checked={formData.BAME}
          />
          <label htmlFor="BAME">BAME</label>
        </div>
      </div>

      <label htmlFor="PictureOptionUpload">
        Picture:
        <input
          id="PictureOptionUpload"
          name="PictureOptionUpload"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="SocialMediaLink">
        Socials:
        <input
          id="SocialMediaLink"
          name="SocialMediaLink"
          onChange={handleChange}
          value={formData.SocialMediaLink}
        />
      </label>
      <label htmlFor="TicketPrice">
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
      <label htmlFor="QuantityTickets">
        Quantity:
        <input
          id="QuantityTickets"
          name="QuantityTickets"
          type="number"
          onChange={handleChange}
          value={formData.QuantityTickets}
        />
      </label>
      <button className="add-event-button">Add Event</button>
    </form>
  );
}
