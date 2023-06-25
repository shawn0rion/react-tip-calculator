import { theme, GlobalStyle } from "./Theme.js";
import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";
import Display from "./components/Display.js";
import { ThemeProvider } from "styled-components";
function App() {
  const [bill, setBill] = useState("");
  const [tipRate, setTipRate] = useState("");
  const [numPpl, setNumPpl] = useState("");
  const [activeTip, setActiveTip] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const dollarRegex = /^\d*\.?\d{0,2}$/;

  const updateDisplayState = () => {
    const newState = {
      tipAmount:
        (parseFloat(bill) / parseInt(numPpl)) * parseFloat(tipRate / 100),
      totalAmount:
        parseFloat(bill) / parseInt(numPpl) +
        (parseFloat(bill) / parseInt(numPpl)) * parseFloat(tipRate / 100),
    };
    setTipAmount(newState.tipAmount.toFixed(2));
    setTotalAmount(newState.totalAmount.toFixed(2));
  };

  const handleBillChange = (e) => {
    const value = e.target.value;
    if (dollarRegex.test(value)) {
      setBill(value);
    }
    updateDisplayState();
  };

  const handleTipRateChange = (e) => {
    let value = e.target.textContent;

    const newActiveTip = e.target;
    if (activeTip !== "") activeTip.classList.remove("active");
    newActiveTip.classList.add("active");
    setActiveTip(newActiveTip);

    // handle custom tip
    if (dollarRegex.test(value)) {
      setTipRate(value);
    } else {
      // handle set tip and remove percentage sign
      value = [...value].filter((x) => !Number.isNaN(parseInt(x))).join("");
      setTipRate(value);
    }
    updateDisplayState();
  };

  const handleNumPplChange = (e) => {
    const value = e.target.value;
    const integerRegex = /^\d*$/;
    if (integerRegex.test(value)) {
      setNumPpl(value);
    }
    updateDisplayState();
  };

  const handleFormReset = (e) => {
    setBill("");
    setTipRate("");
    setNumPpl("");
    setActiveTip("");
    activeTip.classList.remove("active");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle>
          <Form
            bill={bill}
            tipRate={tipRate}
            numPpl={numPpl}
            onBillChange={handleBillChange}
            onTipRateChange={handleTipRateChange}
            onNumPplChange={handleNumPplChange}
          />
          <Display
            tipAmount={tipAmount}
            totalAmount={totalAmount}
            onFormReset={handleFormReset}
          />
        </GlobalStyle>
      </ThemeProvider>
    </>
  );
}

export default App;
