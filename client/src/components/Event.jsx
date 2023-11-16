import "./eventList.css";

export default function Event({
  OrganizerName,
  Name,
  Location,
  EventTitle,
  DateTime,
  Duration,
  Description,
  FilterTags,
  PictureOptionUpload,
  SocialMediaLink,
  TicketPrice,
  QuantityTickets,
  onUpdate,
  onDelete,
}) {
  return (
    <article className="eventCard">
      <h2>{Name}</h2>
      <h3>{OrganizerName}</h3>
      <p>
        <strong>Location:</strong> {Location}
      </p>
      <p>
        <strong>Event Title:</strong> {EventTitle}
      </p>
      <p>
        <strong>Date and Time:</strong> {DateTime}
      </p>
      <p>
        <strong>Duration:</strong> {Duration}
      </p>
      <p>
        <strong>Description:</strong> {Description}
      </p>
      <p>
        <strong>Tags:</strong> {FilterTags}
      </p>

      <p>
        <strong>Price:</strong> £{TicketPrice}
      </p>
      <p>
        <strong>Quantity:</strong> {QuantityTickets} places
      </p>

      <img
        className="media-img"
        src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
        alt=""
      />
      <img
        className="media-img"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
        alt=""
      />
      <br></br>
      <button>Book</button>
      <button className="update-button" onClick={onUpdate}>
        Update Event
      </button>
      <button className="delete-button" onClick={onDelete}>
        Delete Event
      </button>
    </article>
  );
}
