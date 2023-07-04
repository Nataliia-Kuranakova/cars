import Skeleton from '@mui/material/Skeleton';

const TableSkeleton = ({ count }) => {
  const skeletonRows = Array(count)
    .fill(0)
    .map((_, i) => {
      return (
        <Skeleton
          key={i}
          animation="wave"
          height={63}
          sx={{ width: 1152 }}
          component="tr"
        />
      );
    });
  return skeletonRows;
};

export default TableSkeleton;
