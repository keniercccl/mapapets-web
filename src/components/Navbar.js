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
import logoMapapets from "../assets/apets_imagotipo2.svg";
import fondo_logo from "../assets/fondo_logo_1.png";

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
  backgroundColor: "rgba(0, 0, 0, 0)",
  boxShadow: "none",
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

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="left" in={!trigger} timeout={500}>
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
    { text: "Nuestra Huella", icon: <FilterFramesIcon />, link: "/nuestra-huella" },
    { text: "Redes", icon: <InstagramIcon />, link: "/redes" },
    { text: "Contactanos", icon: <ContactMailIcon />, link: "/contactanos" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar position="fixed" open={open} sx={{ border: "none", width: "100vw" }}>
          <Toolbar sx={{ justifyContent: "space-between", minHeight: { xs: "64px", sm: "64px" }, minWidth: "100vw" }}>
            {!isDesktop && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between", // Asegurar espaciado adecuado
                  alignItems: "center",
                  backgroundColor: "#5A189A",
                  height: "60px",
                  width: "100vw",  // Forzar a ocupar el viewport
                  paddingX: 1,  // Espacio a los lados
                  overflow: "hidden"
                }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Box
                  component="img"
                  src={PerroLadra}
                  alt="PerroLadra"
                  sx={{ width: 40, height: 40, mr: 2, borderRadius: "18px" }}
                />
                <Typography
                  variant="h4"
                  fontSize="clamp(16px, 5vw, 32px)"
                  fontWeight="bold"
                  noWrap
                  component="div"
                  sx={{

                    display: { xs: "block", sm: "block" },
                    color: "#E17285",
                    textAlign: "center",
                  }}
                >
                  M A P A P E T S
                </Typography>
                <Box
                  component="img"
                  src={GatoJuega}
                  alt="GatoJuega"
                  sx={{ width: 40, height: 40, ml: 2, borderRadius: "18px" }}
                />
              </ Box>
            )}

            {isDesktop && (
              <>
                <Box
                  sx={{ width: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Box
                    component="img"
                    src={logoMapapets}
                    alt="logoMapapets"
                    sx={{
                      padding: 6, mr: 2, margin: "20px",
                      borderTopLeftRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                      borderTopRightRadius: "50px",
                      width: "300px", height: "100%",
                      display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${fondo_logo})`, // Ajusta la ruta según tu estructura de archivos
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "space-around",
                    backgroundColor: "#5A189A",
                    height: "80px",
                    borderTopLeftRadius: "18px",
                    borderBottomLeftRadius: "18px",
                    marginRight: "-30px",
                  }}
                >

                  {menuItems.map(({ text, link }) => (
                    <Typography
                      key={text}
                      variant="menuFont"
                      component="a"
                      href={link}
                      sx={{
                        textDecoration: "none",
                        color: "#BADF3A",
                        fontWeight: "bold",
                        textAlign: "center",
                        margin: "auto",
                        "&:hover": {
                          color: "#5A189A",
                          backgroundColor: "#BADF3A",
                          borderRadius: 1,
                          fontWeight: "bold"
                        },
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                </Box>

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
        variant={isDesktop ? "h3" : "h3"}
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
            <ListItem key={text} disablePadding sx={{
              display: "flex", justifyContent: "center", "&:hover": {
                color: "#5A189A",
                backgroundColor: "#BADF3A",
                borderRadius: 1,
                fontWeight: "bold"
              },
            }}>
              <ListItemButton component="a" href={link}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} variant="h3" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          component="img"
          src={logoMapapets}
          alt="logoMapapets"
          sx={{ width: 150, height: 150, ml: 2, borderRadius: "18px", position: "relative", bottom: 10, margin: "auto" }}>

        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
