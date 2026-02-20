import { http } from "./http";

export const getMesas = async () => {
  const res = await http.get("/mesas/");
  return res.data;
};
