import { useState } from "react";

export default function NewQuery() {
  const [text, setText] = useState("");

  const submit = () => {
    alert("Query submitted: " + text);
    setText("");
  };

  return (
    <div>
      <h2>Raise Query</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter query"
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}