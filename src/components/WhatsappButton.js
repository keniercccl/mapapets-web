import * as React from "react";
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
        width: 72,
        height: 72,
        borderRadius: "50%",
        backgroundImage: `url(${WhatsAppPng})`,
        backgroundSize: "cover",
        zIndex: 1000,
        "&:hover": {
          width: 76,
          height: 76,
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
