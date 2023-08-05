import { Paper, TextField } from "@mui/material";
import { useState } from "react";

const SearchBox = ({onSubmit}) => {
  const [searchTerm, setsearchTerm] = useState("");

  const handlerChange = (event) => setsearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={6} style={{padding: "25px"}}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handlerChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBox;