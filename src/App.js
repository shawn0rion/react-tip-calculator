import { theme, GlobalStyle } from "./Theme.js";
import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";
import Display from "./components/Display.js";
import { ThemeProvider } from "styled-components";
import Container from "./components/styles/Container.styled";
function App() {
  const [bill, setBill] = useState("");
  const [tipRate, setTipRate] = useState("");
  const [numPpl, setNumPpl] = useState("");
  const [activeTip, setActiveTip] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const dollarRegex = /^\d*\.?\d{0,2}$/;
  const integerRegex = /^\d*$/;

  const updateDisplayState = () => {
    const newState = {
      tipAmount:
        (parseFloat(bill) * parseFloat(tipRate / 100)) / parseInt(numPpl),
      totalAmount:
        (parseFloat(bill) + parseFloat(bill) * parseFloat(tipRate / 100)) /
        parseInt(numPpl),
    };
    setTipAmount(newState.tipAmount.toFixed(2));
    setTotalAmount(newState.totalAmount.toFixed(2));
  };

  const handleBillChange = (e) => {
    const value = e.target.value;
    // input validation
    if (dollarRegex.test(value)) {
      setBill(value);
    }
    updateDisplayState();
  };

  const handleTipRateChange = (e) => {
    // filter text input
    let value = e.target?.textContent || e.target.value;
    value = [...value].filter((x) => integerRegex.test(x)).join("");

    // add class to button
    const newActiveTip = e.target;
    if (activeTip !== "") activeTip.classList.remove("active");
    if (newActiveTip.classList.contains("tip-btn")) {
      setActiveTip(newActiveTip);
    } else {
      setActiveTip("");
    }

    // update state
    setTipRate(value);
    updateDisplayState();
  };

  const handleNumPplChange = (e) => {
    const value = e.target.value;
    // input validation

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
    if (activeTip !== "") {
      activeTip.classList.remove("active");
    }
    e.target.blur();
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
      </ThemeProvider>
    </Container>
  );
}

export default App;
