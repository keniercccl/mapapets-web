import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import WhatsAppPng from "../assets/WhatsApp.png";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const WhatsappButton = () => {
  return (
    <IconButton
      onClick={() => window.open("https://wa.me/573213251713")}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundImage: `url(${WhatsAppPng})`,
        backgroundSize: "cover",
        zIndex: 1000,
        "&:hover": {
          width: 70,
          height: 70,
          borderRadius: "50%",
          backgroundSize: "cover"
        },
      }}
    >
      {/* El contenido del botón puede ser vacío o se puede agregar un ícono o texto adicional */}
    </IconButton>
  );
};

export default WhatsappButton;
