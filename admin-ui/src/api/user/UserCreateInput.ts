import { EventoCreateNestedManyWithoutUsersInput } from "./EventoCreateNestedManyWithoutUsersInput";
import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { LugarCreateNestedManyWithoutUsersInput } from "./LugarCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  eventos?: EventoCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  lugars?: LugarCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
