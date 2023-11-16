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
    <article>
      <h2>{OrganizerName}</h2>
      <h2>@ {Name}</h2>
      <p>Location: {Location}</p>
      <p>Event Title: {EventTitle}</p>
      <p>Date and Time: {DateTime}</p>
      <p>Duration: {Duration}</p>
      <p>Description: {Description}</p>
      <p>Tags: {FilterTags}</p>
      <p>Picture: {PictureOptionUpload}</p>
      <p>Social: {SocialMediaLink}</p>
      <p>Price: {TicketPrice}</p>
      <p>Quantity: {QuantityTickets}</p>
      <button onClick={onUpdate}>Update Event</button>
      <button onClick={onDelete}>Delete Event</button>
    </article>
  );
}
