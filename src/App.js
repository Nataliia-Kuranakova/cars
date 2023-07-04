import { useState } from 'react';

import { Container } from '@mui/material';

import HeaderContainer from './components/HeaderContainer';
import CarsTable from './components/CarsTable';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('car');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (field) => {
    setSearchTerm('');
    setSearchField(field);
  };

  return (
    <Container>
      <HeaderContainer
        onSearch={handleSearch}
        searchField={searchField}
        searchTerm={searchTerm}
        onChange={handleChange}
      />
      <CarsTable searchField={searchField} searchTerm={searchTerm} />
    </Container>
  );
}

export default App;
