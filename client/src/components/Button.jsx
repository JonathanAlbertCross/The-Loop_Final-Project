export default function Button({ showNewEvent, setShowNewEvent }) {
  return (
    <button onClick={() => setShowNewEvent(!showNewEvent)}>Add Event</button>
  );
}
