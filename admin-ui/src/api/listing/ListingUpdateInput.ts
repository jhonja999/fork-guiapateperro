import { EventoUpdateManyWithoutListingsInput } from "./EventoUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { LugarUpdateManyWithoutListingsInput } from "./LugarUpdateManyWithoutListingsInput";
import { ProductoUpdateManyWithoutListingsInput } from "./ProductoUpdateManyWithoutListingsInput";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  eventos?: EventoUpdateManyWithoutListingsInput;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType?: string;
  lugars?: LugarUpdateManyWithoutListingsInput;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  productos?: ProductoUpdateManyWithoutListingsInput;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
