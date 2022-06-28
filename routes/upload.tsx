/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <h1>Upload audioboks</h1>

      <form
        encType="multipart/form-data"
        action="/api/upload"
        method="post"
      >
        <div>
          <label for="author">Author:</label>
          <input type="text" name="author" />
        </div>
        <div>
          <label for="book-name">Book name:</label>
          <input type="text" name="book-name" />
        </div>
        <div>
          <label for="chapter-name">Chapter name:</label>
          <input type="text" name="chapter-name" />
        </div>
        <div>
          <label for="audio">Audio file:</label>
          <input type="file" name="audio" accept="audio/*" />
        </div>

        <input type="submit" value="upload" />
      </form>
    </div>
  );
}
