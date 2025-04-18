import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (inputValue: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleOnReset = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <Stack spacing={2} direction="column" margin={2} width={"30%"}>
      <TextField
        id="search-input"
        label="Search"
        fullWidth
        value={inputValue}
        onChange={handleOnChange}
      />
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="outlined" onClick={handleOnReset}>
          Reset
        </Button>
      </Stack>
    </Stack>
  );
};
