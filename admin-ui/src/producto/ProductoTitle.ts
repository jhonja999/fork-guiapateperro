import { Producto as TProducto } from "../api/producto/Producto";

export const PRODUCTO_TITLE_FIELD = "id";

export const ProductoTitle = (record: TProducto): string => {
  return record.id?.toString() || String(record.id);
};
