import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="container">
      <h1>Profile Card Generator</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Profession"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="card">
        <img
          src={
            image ||
            "https://via.placeholder.com/150"
          }
          alt="Profile"
        />

        <h2>{name || "Your Name"}</h2>
        <p>{job || "Your Profession"}</p>
      </div>
    </div>
  );
}

export default App;