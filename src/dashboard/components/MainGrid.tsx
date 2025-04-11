import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HeartRateChart from "./HeartRateChart";
import HeartRateVariabilityChart from "./HeartRateVariabilityChart";
import BloodOxygenChart from "./BloodOxygenChart";
import WristTemperatureChart from "./WristTemperatureChart";
import { HealthData } from "../data/data";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

export default function MainGrid({ data }: { data: HealthData }) {
  const is900 = useMediaQuery("(max-width: 900px)")

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      {/*<Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Дані за 11.04.2025
      </Typography>*/}
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {is900 && <Typography component="h2" variant="h6" sx={{ mb: 2, marginBottom: 0 }}>
          {data.userName !== "" ? `${data.userName}` : "Мої дані"}
        </Typography>}
        <Grid size={{ xs: 12, md: 6 }}>
          <HeartRateChart
            averageHeartRate={data.averageHeartRate}
            heartRateData={data.heartRateData}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <HeartRateVariabilityChart
            hrvData={data.hrvData}
            averageHRV={data.averageHRV}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <BloodOxygenChart
            bloodOxygenData={data.bloodOxygenData}
            averageOxygen={data.averageOxygen}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <WristTemperatureChart
            baseTemperatureData={data.baseTemperatureData}
            averageTemperature={data.averageTemperature}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
