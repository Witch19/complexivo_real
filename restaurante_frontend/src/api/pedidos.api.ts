
import { http } from "./http";

export const getPedidos = async () => {
  const res = await http.get("/pedidos/");
  return res.data;
};
