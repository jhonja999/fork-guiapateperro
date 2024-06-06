import { Evento as TEvento } from "../api/evento/Evento";

export const EVENTO_TITLE_FIELD = "id";

export const EventoTitle = (record: TEvento): string => {
  return record.id?.toString() || String(record.id);
};
