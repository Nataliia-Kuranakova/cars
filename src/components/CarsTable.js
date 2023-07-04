import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCars } from '../store';

import useModal from '../hooks/useModal';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import AddCarMobileBtn from './AddCarMobileBtn';
import CustomButton from './CustomButton';
import Modal from './Modal';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

import { useFetchCarsQuery } from '../store';
import { columns } from '../columnsArray/columns';

import TableSkeleton from './TableSkeleton';
import DropDownMenu from './DropDownMenu';
import useLocalStorage from '../hooks/useLocalStorage';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#444444',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CarsTable = ({ searchTerm, searchField }) => {
  const { data, error, isLoading } = useFetchCarsQuery();
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const dispatch = useDispatch();
  const localCars = useSelector((state) => state.localCars.data);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [result, setResult] = useState([]);
  const {
    openModal,
    handleClickOpen,
    handleClickClose,
    handleProperModalContent,
    properModalContetnt,
  } = useModal();

  useEffect(() => {
    if (data) {
      let resultValue;
      const localStorage = getLocalStorage();

      if (localStorage && localCars.length > 0) {
        resultValue = localCars;
      } else if (localStorage) {
        resultValue = localCars;
        dispatch(setCars(localStorage));
      } else {
        setLocalStorage(data.cars);
        resultValue = data.cars;
        dispatch(setCars(data.cars));
      }

      setResult(resultValue);
    }
  }, [data, localCars, dispatch, getLocalStorage, setLocalStorage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenAddModal = (cont) => {
    handleProperModalContent(cont);
    handleClickOpen();
  };

  const filteredCars = (arr) => {
    const resultSearch = arr.filter((car) =>
      String(car[searchField]).toLowerCase().includes(searchTerm.toLowerCase())
    );
    return resultSearch;
  };

  const renderedCars = (arr) => {
    return arr
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
            {columns.map((column) => {
              const columnName = column.id;
              let value = row[columnName];

              if (columnName === 'availability') {
                value = value ? (
                  <DirectionsCarFilledIcon color="success" />
                ) : (
                  <CarCrashIcon color="error" />
                );
              } else if (columnName === 'actions') {
                value = <DropDownMenu row={row} />;
              }

              return (
                <TableCell key={column.id} align={column.align}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      });
  };

  let content;
  let filteredData;
  if (isLoading) {
    content = <TableSkeleton count={10} />;
  } else if (error) {
    content = <div>Error {error.message}</div>;
  } else if (data) {
    filteredData = filteredCars(result);
    content = renderedCars(filteredData);
  }

  const isWebVersion = useMediaQuery('(min-width:600px)');

  const renderedWebBtn = (
    <>
      {isWebVersion ? (
        <Box sx={{ position: 'absolute', mt: 1, ml: 3, zIndex: 1 }}>
          <CustomButton
            onClick={() => handleOpenAddModal('add')}
            btnColor="#2d9d79"
          >
            Add record
          </CustomButton>
        </Box>
      ) : (
        <AddCarMobileBtn />
      )}
    </>
  );

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', mt: 6 }}>
        <TableContainer sx={{ maxHeight: 840 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <Typography variant="h6">{column.label}</Typography>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>{content}</TableBody>
          </Table>
        </TableContainer>
        {renderedWebBtn}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={(localCars && filteredData && filteredData.length) || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal
        open={openModal}
        onClose={handleClickClose}
        content={properModalContetnt}
      />
    </Box>
  );
};

export default CarsTable;

export { columns };
