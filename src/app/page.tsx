"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { Advocate } from "./types";
import { Table } from "./components/Table";
import { useAdvocates } from "./hooks/useAdvocates";
import { columns } from "./constants";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const { data, isLoading } = useAdvocates();

  useEffect(() => {
    if (data) {
      setAdvocates(data);
      setFilteredAdvocates(data);
    }
  }, [data]);

  const onSearch = (searchInputValue: string) => {
    const filteredAdvocates = !searchInputValue
      ? advocates
      : advocates.filter((advocate) => {
          return Object.values(advocate)
            .join("")
            .toLocaleLowerCase()
            .includes(searchInputValue);
        });
    setFilteredAdvocates(filteredAdvocates);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <SearchBar onSearch={onSearch} />
        <Table
          rows={filteredAdvocates}
          columns={columns}
          isLoading={isLoading}
        />
      </Box>
    </Container>
  );
}
