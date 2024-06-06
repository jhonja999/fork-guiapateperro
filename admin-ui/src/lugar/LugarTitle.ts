import { Lugar as TLugar } from "../api/lugar/Lugar";

export const LUGAR_TITLE_FIELD = "id";

export const LugarTitle = (record: TLugar): string => {
  return record.id?.toString() || String(record.id);
};
