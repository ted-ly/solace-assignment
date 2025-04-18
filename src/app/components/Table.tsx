import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";

type TableProps = {
  rows: GridValidRowModel[];
  columns: GridColDef[];
  isLoading?: boolean;
};

export function Table({ rows, columns, isLoading }: TableProps) {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLoading ? (
        <Skeleton variant="rectangular" animation="wave" height={"100%"} />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          hideFooter
          getRowId={(row) => row.phoneNumber}
        />
      )}
    </Box>
  );
}
