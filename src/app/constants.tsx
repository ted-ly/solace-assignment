import { GridColDef } from "@mui/x-data-grid";
import { Advocate } from "./types";

export const columns: GridColDef<Advocate>[] = [
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
  {
    field: "degree",
    headerName: "Degree",
    width: 150,
  },
  {
    field: "specialties",
    headerName: "Specialties",
    width: 200,
  },
  {
    field: "yearsOfExperience",
    headerName: "Years of Experience",
    width: 150,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
  },
];
