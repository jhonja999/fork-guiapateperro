import { JsonValue } from "type-fest";
import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Evento = {
  createdAt: Date;
  eventoinfo: JsonValue;
  id: string;
  listing?: Listing;
  updatedAt: Date;
  user?: User;
};
