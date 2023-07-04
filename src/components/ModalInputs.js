import { useState } from 'react';

import Box from '@mui/material/Box';

import { columns } from '../columnsArray/columns';

import Input from './Input';
import Toggle from './Toggle';

const ModalInputs = ({ row, disabledInput, inputValue, setInputValue }) => {
  const [checked, setChecked] = useState(row ? row.availability : false);

  const handleChange = (event) => {
    setChecked(event);
    setInputValue((prevInputValues) => ({
      ...prevInputValues,
      availability: !checked,
    }));
  };

  const handleInputChange = (event, field) => {
    setInputValue((prevInputValues) => ({
      ...prevInputValues,
      [field]: event.target.value,
    }));
  };

  const filteredColumns = columns.filter(
    (elem) => elem.label !== 'Actions' && elem.label !== 'Availability'
  );

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { mt: 2, maxWidth: '100%' },
      }}
      autoComplete="off"
    >
      {filteredColumns.map((column) => {
        const defaultValue = row ? row[column.id] || '' : null;
        const isDisabled = disabledInput
          ? ['Company', 'Model', 'VIN', 'Year'].includes(column.label)
          : false;
        return (
          <Input
            required
            key={column.label}
            label={column.label}
            value={inputValue[column.label]}
            defaultValue={defaultValue}
            disabled={isDisabled}
            handleInputChange={(event) => handleInputChange(event, column.id)}
          />
        );
      })}
      <Toggle value={checked} onChange={handleChange} />
    </Box>
  );
};

export default ModalInputs;
