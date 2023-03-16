import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { getNationalities } from "../services/appService";

import { INationalities } from "../Interfaces/userInterface";

const GridStyled = styled(Grid)`
  margin-top: 32px;
`;

const Nationalities = () => {
  const [listNationalities, setListNationalities] = useState<INationalities[]>(
    []
  );

  const getListNationalities = () => {
    const response: INationalities[] = getNationalities();
    setListNationalities(response);
  };

  useEffect(() => {
    getListNationalities();
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h4">Select a nationality</Typography>
      <GridStyled item xs={12}>
        {listNationalities.map((nationality) => (
          <Link to={`/users/${nationality.code}`} key={nationality.code}>
            <Button
              href={`/${nationality.code}`}
              variant="outlined"
              size="large"
              sx={{ ml: 1, mb: 1 }}
            >
              {nationality.name}
            </Button>
          </Link>
        ))}
      </GridStyled>
    </Grid>
  );
};

export default Nationalities;
