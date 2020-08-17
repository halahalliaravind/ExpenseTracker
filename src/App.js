import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeComponent } from "./components/IncomeComponent";
import { TranscationalList } from "./components/TranscationalList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeComponent />
        <TranscationalList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
