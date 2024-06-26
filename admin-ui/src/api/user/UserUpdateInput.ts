import { EventoUpdateManyWithoutUsersInput } from "./EventoUpdateManyWithoutUsersInput";
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { LugarUpdateManyWithoutUsersInput } from "./LugarUpdateManyWithoutUsersInput";
import { ProductoUpdateManyWithoutUsersInput } from "./ProductoUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  eventos?: EventoUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingUpdateManyWithoutUsersInput;
  lugars?: LugarUpdateManyWithoutUsersInput;
  password?: string;
  productos?: ProductoUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
};
