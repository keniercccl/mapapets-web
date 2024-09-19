import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery, useScrollTrigger, Slide } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PetsIcon from "@mui/icons-material/Pets";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GatoJuega from "../assets/gato_juega.gif";
import PerroLadra from "../assets/perro_ladra.gif";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      marginLeft: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#5A189A",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// Función para ocultar AppBar al hacer scroll
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: "Inicio", icon: <PetsIcon />, link: "/" },
    { text: "Servicios", icon: <BusinessCenterIcon />, link: "/servicios" },
    { text: "Nuestra Huella", icon: <FilterFramesIcon />, link: "/nuestra-huella"},

    { text: "Redes", icon: <InstagramIcon />, link: "/redes" },
    { text: "Contactanos", icon: <ContactMailIcon />, link: "/contactanos" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Componente para ocultar AppBar al hacer scroll */}
      <HideOnScroll>
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {!isDesktop && (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                {/* Icono PerroLadra para mobile */}
                <Box
                  component="img"
                  src={PerroLadra}
                  alt="PerroLadra"
                  sx={{ width: 40, height: 40, mr: 2, borderRadius: "18px" }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "block", sm: "block" },
                    color: "#E17285",
                    textAlign: "center",
                  }}
                >
                  M A P A P E T S
                </Typography>
                {/* Icono GatoJuega para mobile */}
                <Box
                  component="img"
                  src={GatoJuega}
                  alt="GatoJuega"
                  sx={{ width: 40, height: 40, ml: 2, borderRadius: "18px" }}
                />
              </>
            )}

            {isDesktop && (
              <>
                {/* Icono PerroLadra para desktop */}
                <Box
                  component="img"
                  src={PerroLadra}
                  alt="PerroLadra"
                  sx={{ width: 40, height: 40, mr: 2, borderRadius: "18px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "space-around",
                  }}
                >
                  {menuItems.map(({ text, link }) => (
                    <Typography
                      key={text}
                      variant="h6"
                      component="a"
                      href={link}
                      sx={{
                        textDecoration: "none",
                        color: "#BADF3A",
                        "&:hover": {
                          color: "#5A189A",
                          backgroundColor: "#BADF3A",
                          borderRadius: 1,
                        },
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                </Box>
                {/* Icono GatoJuega para desktop */}
                <Box
                  component="img"
                  src={GatoJuega}
                  alt="GatoJuega"
                  sx={{ width: 40, height: 40, ml: 2, borderRadius: "18px" }}
                />
              </>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isDesktop ? "persistent" : "persistent"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ArrowBackIosIcon />
            ) : (
              <ArrowBackIosIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map(({ text, icon, link }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href={link}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
