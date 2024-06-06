import { Evento } from "../evento/Evento";
import { Listing } from "../listing/Listing";
import { Lugar } from "../lugar/Lugar";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  createdAt: Date;
  email: string | null;
  eventos?: Array<Evento>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  lugars?: Array<Lugar>;
  roles: JsonValue;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
};
