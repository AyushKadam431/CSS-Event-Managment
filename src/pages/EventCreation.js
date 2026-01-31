import React, { useState } from "react";
import "./EventCreation.css";

const EventCreation = ({ onCreateEvent }) => {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    category: "",
    prize: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setEventData({
      ...eventData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdEvent = {
      ...eventData,
      id: Date.now(),
      image: eventData.image
        ? URL.createObjectURL(eventData.image)
        : null,
    };

    // 🔥 SEND EVENT TO PARENT (Gallery)
    onCreateEvent(createdEvent);

    alert("Event Created Successfully!");

    // Optional: reset form
    setEventData({
      title: "",
      date: "",
      time: "",
      location: "",
      category: "",
      prize: "",
      description: "",
      image: null,
    });
  };

  return (
    <div className="event-create-page">
      <h1>Create New Event</h1>

      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter event title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Event location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={eventData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option>Music</option>
              <option>Technical</option>
              <option>Dance</option>
              <option>Cultural</option>
              <option>Workshop</option>
              <option>Sports</option>
            </select>
          </div>

          <div className="form-group">
            <label>Prize Amount</label>
            <input
              type="text"
              name="prize"
              placeholder="₹ Prize money"
              value={eventData.prize}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Event Description</label>
          <textarea
            name="description"
            placeholder="Describe the event"
            value={eventData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Event Poster</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventCreation;
