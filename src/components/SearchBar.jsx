
import React, { useState } from 'react';

function SearchBar({ transactions, setFilteredTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(term)
    );
    setFilteredTransactions(filteredTransactions);
  };

  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
