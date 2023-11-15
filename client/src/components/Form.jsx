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
    FilterTags: [""],
    PictureOptionUpload: "",
    SocialMediaLink: "",
    TicketPrice: [],
    QuantityTickets: [],
  });

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const API = "http://localhost:8080/events";
    // const API = "https://the-loop.onrender.com";
    const res = await axios.post(API, formData);
    setEvents([...events, res.data]);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        name=" OrganizerName"
        placeholder="Your Name"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="Name"
        placeholder="Group Name"
        onChange={(e) => handleChange(e)}
      />
      <input
        name=" Location"
        placeholder="Your Location"
        onChange={(e) => handleChange(e)}
      />
      <input
        name=" EventTitle"
        placeholder="Title"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="DateTime"
        type="date"
        placeholder="Date and Time"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="Duration"
        placeholder="Duration"
        onChange={(e) => handleChange(e)}
      />
      <input
        name=" Description"
        placeholder="Description"
        onChange={(e) => handleChange(e)}
      />
      <input
        name=" FilterTags"
        placeholder="Filter"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="PictureOptionUpload"
        type="image"
        placeholder="Upload Image"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="SocialMediaLink"
        placeholder="Link to social media"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="TicketPrice"
        type="number"
        min="1"
        step="any"
        placeholder="Link to social media"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="QuantityTickets"
        type="number"
        placeholder="Quantity"
        onChange={(e) => handleChange(e)}
      />
      <input name="status" type="checkbox" onChange={(e) => handleChange(e)} />
      <button>Add Event</button>
    </form>
  );
}
