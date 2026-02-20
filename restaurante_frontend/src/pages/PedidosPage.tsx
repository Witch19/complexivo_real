import { useEffect, useState } from "react";
import { getPedidos} from "../api/pedidos.api";

export default function ReservationsPage() {
  const [pedidos, setPedidos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPedidos = () => {
    setLoading(true);
    getPedidos()
      .then((data) => setPedidos(data.results || data))
      .catch(() => setError("Error cargando reservas"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadPedidos();
  }, []);


  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Pedidos</h2>

      {pedidos.map((r) => (
        <div key={r.id}>
          Cliente: {r.table_id} | Items: {r.items_summary } | Total: {r.total}| Estado: {r.status}
        </div>
      ))}
    </div>
  );
}