import "./App.css";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  return (
    <>
      <h1>URL SHORTENER</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <button type="submit">Shorten</button>
      </form>
    </>
  );
}

export default App;
