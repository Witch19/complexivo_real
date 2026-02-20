import { http } from "./http";

export const getMenus = async () => {
  const res = await http.get("/menus/");
  return res.data;
};

export const getOrderEvents = async () => {
  const res = await http.get("/order_events/");
  return res.data;
};