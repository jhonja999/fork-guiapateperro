import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Producto = {
  createdAt: Date;
  id: string;
  listing?: Listing;
  price: number;
  productinfo: JsonValue;
  updatedAt: Date;
  user?: User;
};
