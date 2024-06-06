import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Lugar = {
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  lugarinfo: JsonValue;
  updatedAt: Date;
  user?: User;
};
