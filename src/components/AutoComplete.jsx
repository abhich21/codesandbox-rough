import React, { useState, useRef, useEffect } from 'react';

const Autocomplete = ({ suggestions = [], placeholder = "Search..." }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Filter suggestions based on input
    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(inputValue.length > 0 && filtered.length > 0);
  }, [inputValue, suggestions]);

  const handleSelect = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="autocomplete-container" style={{ position: 'relative', width: '300px' }}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      />
      {showSuggestions && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          border: '1px solid #ccc',
          borderTop: 'none',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          maxHeight: '200px',
          overflowY: 'auto',
          zIndex: 1000
        }}>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelect(suggestion)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Usage example
const App = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  return (
    <div style={{ padding: '20px' }}>
      <h3>React Autocomplete</h3>
      <Autocomplete suggestions={fruits} placeholder="Type a fruit..." />
    </div>
  );
};

export default App;
