import { EventoCreateNestedManyWithoutListingsInput } from "./EventoCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { LugarCreateNestedManyWithoutListingsInput } from "./LugarCreateNestedManyWithoutListingsInput";
import { ProductoCreateNestedManyWithoutListingsInput } from "./ProductoCreateNestedManyWithoutListingsInput";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  eventos?: EventoCreateNestedManyWithoutListingsInput;
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  lugars?: LugarCreateNestedManyWithoutListingsInput;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmeneties: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  price: number;
  productos?: ProductoCreateNestedManyWithoutListingsInput;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
