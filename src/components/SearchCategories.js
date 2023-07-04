import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { columns } from '../columnsArray/columns';

const SearchCategories = ({ onSearch, searchField }) => {
  const filteredChips = columns.filter(
    (elem) => elem.label !== 'Availability' && elem.label !== 'Actions'
  );

  return (
    <>
      <Stack direction="row" spacing={{ md: 2, xs: 1 }} mt={4.5}>
        {filteredChips.map((chip) => {
          const bgColor =
            searchField === chip.id
              ? {
                  backgroundColor: '#ff9a34',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#ff8101',
                  },
                }
              : {
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                };
          return (
            <Chip
              size="small"
              key={chip.id}
              label={chip.label}
              onClick={() => onSearch(chip.id)}
              sx={bgColor}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default SearchCategories;
