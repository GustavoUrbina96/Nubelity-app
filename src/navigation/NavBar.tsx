import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

import { NavLink } from "react-router-dom";
import sections from "../routers/SectionsRoutes";
import { useState } from "react";

const StyledAppBar = styled(AppBar)`
  margin-bottom: 32px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const StyledTypography = styled(Typography)`
  color: black;
`;

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const Header = () => "Nubelity";

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {Header()}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map(
                (section) =>
                  !section.isChildren && (
                    <StyledNavLink to={section.path} key={section.path}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <StyledTypography textAlign="center">
                          {section.title}
                        </StyledTypography>
                      </MenuItem>
                    </StyledNavLink>
                  )
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {Header()}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sections.map(
              (section) =>
                !section.isChildren && (
                  <StyledNavLink to={section.path} key={section.path}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <Typography textAlign="center">
                        {section.title}
                      </Typography>
                    </Button>
                  </StyledNavLink>
                )
            )}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default NavBar;
