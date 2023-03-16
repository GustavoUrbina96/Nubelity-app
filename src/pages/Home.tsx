import { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";

import { User, Users } from "../Interfaces/userInterface";
import { getUsers } from "../services/appService";
import CardsList from "../components/CardsList";

export const Home = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  const getListUsers = async () => {
    const response: Users = await getUsers().catch((err) => console.error(err));
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
        <Typography variant="h3">All users</Typography>
      </Grid>
      <Grid item>
        <CardsList users={usersList} />
      </Grid>
    </Grid>
  );
};
