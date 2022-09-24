import React, { useState } from "react";
import "./Admin.css";

function Admin() {
  let [num, setNum] = useState("");
  let incNum = () => {
    if (num < 100) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="admin__panel">
      <h1>Admin Panel</h1>

      <div className="gamemode__toggle">
        <h3>Game Mode</h3>
        <div className="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" />
          <label for="dn" className="toggle">
            <span class="toggle__handler"></span>
          </label>
        </div>
      </div>
      <div className="win__percentage">
        <label>Change Win Percentage</label>
        <div className="input-group">
          <button
            type="button"
            onClick={decNum}
            style={{ borderRadius: "8px", marginRight: "10px" }}
          >
            -1%
          </button>
          <input
            className="win__percentageInput"
            value={num}
            onChange={handleChange}
            type="text"
            style={{ borderRadius: "8px" }}
          ></input>
          <button
            type="button"
            onClick={incNum}
            style={{ borderRadius: "8px", marginLeft: "10px" }}
          >
            +1%
          </button>
        </div>
      </div>

      <div className="win__rate">
        <h4>WON</h4>
        <h2>19/32</h2>
        <h3>59.38%</h3>
      </div>

      <div className="text__area">
        <button>Click Me</button>
        <textarea></textarea>
      </div>

      <button className="admin__submit">Submit</button>
    </div>
  );
}

export default Admin;
