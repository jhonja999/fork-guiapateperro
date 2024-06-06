import { Evento } from "../evento/Evento";
import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Lugar } from "../lugar/Lugar";
import { Producto } from "../producto/Producto";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  eventos?: Array<Evento>;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  lugars?: Array<Lugar>;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  productos?: Array<Producto>;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
