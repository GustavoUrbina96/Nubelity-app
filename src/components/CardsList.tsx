import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { User } from "../Interfaces/userInterface";
import CardItem from "./CardItem";

interface Props {
  users: User[];
}

const GridStyled = styled(Grid)`
  margin-top: 16px;
`;

const CardsList = (props: Props) => {
  const { users } = props;
  return (
    <GridStyled
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      {users.map((user) => (
        <Grid item key={user.email}>
          <CardItem user={user} />
        </Grid>
      ))}
    </GridStyled>
  );
};

export default CardsList;
