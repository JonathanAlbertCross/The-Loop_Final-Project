import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [from, setForm] = useState("en");
  const [to, setTo] = useState("fr");

  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState({});

  async function handleTranslate(event) {
    event.preventDefault();
    const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data);
  }

  return (
    <>
      <form onSubmit={handleTranslate}>
        <div className="containerFrom">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Espagnol</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>
      </form>
      <form>
        <div className="containerTo">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="fr">Français</option>
            <option value="es">Espagnol</option>
            <option value="en">English</option>
          </select>
          <div className="output">{translation.translation}</div>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
