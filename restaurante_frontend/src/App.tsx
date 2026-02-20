import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

import MesasPage from "./pages/MesasPage";
import PedidosPage from "./pages/PedidosPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Vehículos UI (MUI)
          </Typography>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            <Button color="inherit" component={Link} to="/shows">Mesas</Button>
            <Button color="inherit" component={Link} to="/reservations">Pedidos</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/mesas" element={<MesasPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

