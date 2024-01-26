"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [formData, setFormData] = useState("");
  const [generatedNumber, setGeneratedNumber] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setFormData(value);
    }
  };

  const generatePrime = () => {
    const max = parseInt(formData);
    const primeNumbers = [];
    for (let num = 2; num <= max; num++) {
      let isPrime = true;
      for (let index = 2; index <= Math.sqrt(num); index++) {
        if (num % index === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeNumbers.push(num);
      }
    }
    setGeneratedNumber(primeNumbers.join(","));
  };
  const generateOdd = () => {
    const max = parseInt(formData);
    const oddNumbers = [];
    for (let index = 1; index <= max; index += 2) {
      oddNumbers.push(index);
    }
    setGeneratedNumber(oddNumbers.join(","));
  };
  const generateTriangle = () => {
    const num = formData;
    const length = num.length;
    const arrNum = num.split("");
    let triangle = "";
    for (let index = 0; index < length; index++) {}
    // let triangle = "";
    // for (let index = 1; index <= num; index++) {
    //   triangle += '${index.toString().padEnd(index, "0")}\n';
    // }
    setGeneratedNumber(arrNum[2]);
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          TEST LIVE CODE&nbsp;
          {/* <code className={styles.code}>src/app/page.js</code> */}
        </p>
      </div>

      <div className={styles.grid}></div>
      <div class="row">
        <form>
          <input
            type="text"
            id="number"
            name="number"
            value={formData}
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div class="row">
        <button onClick={generateTriangle}>Generate Segitiga</button>
        <button onClick={generateOdd}>Generate Ganjil</button>
        <button onClick={generatePrime}>Generate Prima</button>
      </div>
      {generatedNumber && (
        <div class="row">
          <pre>{generatedNumber}</pre>
        </div>
      )}
    </main>
  );
}
