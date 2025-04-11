import * as React from "react";
import Stack from "@mui/material/Stack";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";
import Typography from "@mui/material/Typography";

export default function Header({ userName }: { userName: string }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "flex-end",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}
    >
      <Stack
        direction="row"
        sx={{
          gap: 1,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography component="h2" variant="h6" sx={{ mb: 2, marginBottom: 0 }}>
          {userName !== "" ? `${userName}` : "Мої дані"}
        </Typography>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
