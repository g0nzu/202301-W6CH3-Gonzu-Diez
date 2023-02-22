import React from "react";
import "./main.css";
import { Display } from "../display/display";

export function Main() {
  const [number, setNumber] = React.useState("");

  const updateNumber = (key: string) => {
    if (number.length < 9) {
      setNumber(number + key);
    }
  };

  return (
    <div className="container">
      <main className="phone">
        <div className="keyboard-container">
          <Display number={number} />
          <ol className="keyboard">
            <li>
              <button className="key" onClick={() => updateNumber("1")}>
                1
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("2")}>
                2
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("3")}>
                3
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("4")}>
                4
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("5")}>
                5
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("6")}>
                6
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("7")}>
                7
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("8")}>
                8
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("9")}>
                9
              </button>
            </li>
            <li>
              <button className="key" onClick={() => updateNumber("0")}>
                0
              </button>
            </li>
            <li>
              <button className="key big" onClick={() => setNumber("")}>
                delete
              </button>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
