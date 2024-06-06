import { SortOrder } from "../../util/SortOrder";

export type ProductoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  price?: SortOrder;
  productinfo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
