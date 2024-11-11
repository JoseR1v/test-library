import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ onSearch }) => {
    
  const themes = ['Título', 'Autor']  
  const [query, setQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState(themes[0] || '');

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ query, theme: selectedTheme });
    }
  };

  return (
    <div className="flex items-center gap-2 max-lg:flex-col max-lg:w-full">
      <select
        className="w-32 border border-secondary rounded-lg p-3 bg-white max-lg:w-full"
        value={selectedTheme}
        onChange={(e) => setSelectedTheme(e.target.value)}
      >
        {themes.map((theme, index) => (
          <option key={index} value={theme}>
            {theme}
          </option>
        ))}
      </select>

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="w-96"
      />

      <Button 
      className="max-lg:w-full"
        onClick={handleSearch} 
        icon={faMagnifyingGlass}
      >
        Buscar
      </Button>
    </div>
  );
};

export default SearchInput;
