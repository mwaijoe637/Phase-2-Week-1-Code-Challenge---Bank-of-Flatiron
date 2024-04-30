// src/App.js
import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css'; // Importing the provided styles

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Royal Bank of Flatiron</h1>
      </header>
      <main>
        <TransactionForm addTransaction={addTransaction} />
        <SearchBar transactions={transactions} setFilteredTransactions={setTransactions} />
        <TransactionTable transactions={transactions} />
      </main>
    </div>
  );
}

export default App;
