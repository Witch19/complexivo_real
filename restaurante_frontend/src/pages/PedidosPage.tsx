import { useEffect, useState } from "react";
import { getPedidos} from "../api/pedidos.api";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadReservations = () => {
    setLoading(true);
    getPedidos()
      .then((data) => setReservations(data.results || data))
      .catch(() => setError("Error cargando reservas"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadReservations();
  }, []);


  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Reservas</h2>

      {reservations.map((r) => (
        <div key={r.id}>
          Cliente: {r.table_id} | Items: {r.items_summary } | Total: {r.total}| Estado: {r.status}
        </div>
      ))}
    </div>
  );
}