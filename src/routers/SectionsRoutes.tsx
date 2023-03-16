import { HomeOutlined } from "@mui/icons-material";
import { Home } from "../pages/Home";
import Nationalities from "../pages/Nationalities";
import Nationality from "../pages/Nationality";

const sections = [
  {
    title: "Home",
    path: "/",
    component: <Home />,
    icon: <HomeOutlined />,
  },
  {
    title: "Users",
    path: "/users",
    component: <Nationalities />,
    icon: <HomeOutlined />,
  },
  {
    title: "test",
    path: "/users/:nationality",
    component: <Nationality />,
    icon: <HomeOutlined />,
    isChildren: true,
  },
];

export default sections;
