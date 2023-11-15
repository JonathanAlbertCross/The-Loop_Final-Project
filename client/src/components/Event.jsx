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
}) {
  return (
    <article className="eventCard">
      <h2>{Name}</h2>
      <h3>{OrganizerName}</h3>
      <p>
        Location: <strong>{Location}</strong>
      </p>
      <p>Event Title: {EventTitle}</p>
      <p>Date and Time: {DateTime}</p>
      <p>Duration: {Duration}</p>
      <p>Description: {Description}</p>
      <p>Tags: {FilterTags}</p>

      <p>Social: {SocialMediaLink}</p>
      <p>Price: £{TicketPrice}</p>
      <p>Quantity: {QuantityTickets} places</p>
    </article>
  );
}
