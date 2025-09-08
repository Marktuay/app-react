import { Button, Card, CardContent, Typography } from '@mui/material';

function Dashboard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Bienvenido al Dashboard
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Tu panel principal con Material UI
          </Typography>
          <Button variant="contained" color="primary">
            Acción principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;