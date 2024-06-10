import { Copy, Eye, LoaderCircle } from "lucide-react";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const shorten = async (long_url: string) => {
    const shortenerEndpoint = "http://127.0.0.1:8080/api/shorten/";
    try {
      const request = await axios.post(shortenerEndpoint, {
        long_url,
      });
      return request.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>URL SHORTENER</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true);
          shorten(url)
            .then((result) => {
              setShortenedLink(result.short_url);
            })
            .finally(() => setIsLoading(false));
        }}
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste long url"
        />
        <br />
        <button type="submit">Shorten</button>
      </form>

      {isLoading && <LoaderCircle className="spinner" size={30} />}

      {shortenedLink && !isLoading && (
        <div className="shortened_display">
          {shortenedLink}
          <div className="icons">
            <a href={shortenedLink} target="_blank">
              <Eye cursor={"pointer"} color="#0080ff" />
            </a>
            <Copy
              cursor={"pointer"}
              color="#0080ff"
              onClick={() => {
                navigator.clipboard.writeText(shortenedLink);
                alert("Url copied");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
