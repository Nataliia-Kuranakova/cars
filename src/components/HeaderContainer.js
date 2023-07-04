import { Typography, Grid } from '@mui/material';

import SearchCategories from './SearchCategories';
import SearchInput from './SearchInput';

export default function BasicGrid({
  onSearch,
  searchField,
  searchTerm,
  onChange,
}) {
  return (
    <>
      <Grid container></Grid>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={1.5}>
          <Typography variant="h5" mt={4}>
            Search by
          </Typography>
        </Grid>
        <Grid item lg={5.5}>
          <SearchCategories searchField={searchField} onSearch={onSearch} />
        </Grid>
        <Grid item lg={5}>
          <SearchInput searchTerm={searchTerm} onChange={onChange} />
        </Grid>
      </Grid>
    </>
  );
}
