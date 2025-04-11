import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
      <defs>
        <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity={0.5} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
  );
}

// Генерация меток времени для оси X (каждые полчаса)
function getTimeLabels() {
  const timeLabels = [];
  for (let hour = 0; hour < 24; hour++) {
    timeLabels.push(`${hour.toString().padStart(2, '0')}:00`);
    timeLabels.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return timeLabels;
}

export default function WristTemperatureChart({
                                                  baseTemperatureData,
                                                  averageTemperature,
                                              }: {
    baseTemperatureData: number[];
    averageTemperature: string;
}) {
  const theme = useTheme();
  const data = getTimeLabels();

  return (
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardContent>
          <Typography component="h2" variant="subtitle2" gutterBottom>
            Температура зап'ястя
          </Typography>
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack
                direction="row"
                sx={{
                  alignContent: { xs: 'center', sm: 'flex-start' },
                  alignItems: 'center',
                  gap: 1,
                }}
            >
              <Typography variant="h4" component="p">
                {averageTemperature}
              </Typography>
              <Chip size="small" color="warning" label="°C" />
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Середня температура за останні 24 години
            </Typography>
          </Stack>
          <LineChart
              colors={[theme.palette.warning.main]}
              xAxis={[
                {
                  scaleType: 'point',
                  data,
                  tickInterval: (index, i) => (i + 1) % 5 === 0,
                },
              ]}
              yAxis={[
                {
                  min: 33.5, // Минимальное значение на шкале
                  max: 36.0, // Максимальное значение на шкале
                },
              ]}
              series={[
                {
                  id: 'temperature',
                  label: 'T°',
                  curve: 'natural', // Плавные изгибы для более естественного вида
                  showMark: false,
                  area: true,
                  data: baseTemperatureData,
                },
              ]}
              height={250}
              margin={{ left: 50, right: 20, top: 20, bottom: 30 }}
              grid={{ horizontal: true, vertical: false }}
              sx={{
                '& .MuiAreaElement-series-temperature': {
                  fill: "url('#temperature')",
                },
              }}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
          >
            <AreaGradient color={theme.palette.warning.main} id="temperature" />
          </LineChart>
        </CardContent>
      </Card>
  );
}