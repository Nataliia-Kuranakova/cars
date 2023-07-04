import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';

export default function TextFieldSizes({ searchTerm, onChange }) {
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { mt: 1, maxWidth: '100%' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search"
          fullWidth
          variant="standard"
          value={searchTerm}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
}
