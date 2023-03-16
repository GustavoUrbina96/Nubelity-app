import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { User, Users } from "../Interfaces/userInterface";
import { getUsersByNationality } from "../services/appService";
import { Grid } from "@mui/material";
import CardsList from "../components/CardsList";

const Nationality = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const { nationality } = useParams();

  const getListUsers = async () => {
    const response: Users = await getUsersByNationality(nationality!).catch(
      (err) => console.error(err)
    );
    setUsersList(response.results);
  };

  useEffect(() => {
    getListUsers();
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item>
        <CardsList users={usersList} />
      </Grid>
    </Grid>
  );
};

export default Nationality;
