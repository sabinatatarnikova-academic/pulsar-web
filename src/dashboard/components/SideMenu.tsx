import * as React from "react";
import { styled, useColorScheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuContent from "./MenuContent";
import { ReactComponent as PulsarLogo } from "../data/PulsarLogo.svg";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
            alignItems: "center",
            gap: "0.5rem"
        }}
      >
        <Box sx={{ color: isDark ? "#fff" : "#000" }}>
          <PulsarLogo style={{ width: "3rem", height: "3rem" }} />
        </Box>
        <Typography
          variant="h2"
          sx={{ fontWeight: 600, lineHeight: "16px", padding: "8px 0" }}
        >
          PULSAR
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent />
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          sizes="small"
          alt="Оніщенко Кирило"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            Оніщенко Кирило
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            k.onishenko@gmail.com
          </Typography>
        </Box>
        {/*<OptionsMenu />*/}
      </Stack>
    </Drawer>
  );
}
