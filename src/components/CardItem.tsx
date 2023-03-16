import { Typography, Stack, IconButton, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import {
  AccountCircleOutlined,
  EmailOutlined,
  CalendarMonthOutlined,
  LocalPhoneOutlined,
  LockOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { User } from "../Interfaces/userInterface";

interface Props {
  user: User;
}

const CardMediaStyled = styled(CardMedia)`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  z-index: 2;
`;

const CardStyled = styled(Card)`
  positon: relative;
`;

const NameStyled = styled(Typography)`
  font-size: 1.8rem;
`;

const PresentationStyled = styled(Typography)`
  font-size: 1rem;
  color: gray;
`;

const CardItem = (props: Props) => {
  const { user } = props;

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <CardStyled>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMediaStyled image={user.picture.medium} />
          </Box>
          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <PresentationStyled>Hi, My name is</PresentationStyled>
              <NameStyled>{`${user.name.first} ${user.name.last} `}</NameStyled>
            </Grid>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary">
                <AccountCircleOutlined />
              </IconButton>
              <IconButton color="secondary">
                <EmailOutlined />
              </IconButton>
              <IconButton color="primary" aria-label="add an alarm">
                <CalendarMonthOutlined />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <MapOutlined />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <LocalPhoneOutlined />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <LockOutlined />
              </IconButton>
            </Stack>
          </CardActions>
        </CardStyled>
      </Grid>
    </Grid>
  );
};

export default CardItem;
