import decToHex from "../functions";
import { useState } from "react";
import "./Converter.css";

function Converter() {
  const [convertFrom, setConvertFrom] = useState("decimal");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    return convertFrom === "decimal" ? setResult(decToHex(input)) : null;
  };

  const handleReset = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="Converter">
      <form className="forms">
        <div className="container">
          <label value="fromLabel">From</label>
          <select
            value={convertFrom}
            onChange={(e) => setConvertFrom(e.target.value)}
          >
            <option value="decimal">DECIMAL</option>
            <option value="haxadecimal">HEXADECIMAL</option>
          </select>
        </div>
        <div className="container">
          <label value="toLabel">To</label>
          <select>
            {convertFrom === "decimal" ? (
              <option value="haxadecimal">HEXADECIMAL</option>
            ) : (
              <option value="decimal">DECIMAL</option>
            )}
          </select>
        </div>
      </form>
      <div className="inputBox">
        <input
          id="inputNumber"
          type="textbox"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </div>
      <button className="btn" onClick={() => handleConvert()}>
        CONVERT
      </button>
      <p className="resultText">{result}</p>
      <button className="btn" onClick={() => handleReset()}>
        RESET
      </button>
    </div>
  );
}

export default Converter;
