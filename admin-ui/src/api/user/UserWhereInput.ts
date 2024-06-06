import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventoListRelationFilter } from "../evento/EventoListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { LugarListRelationFilter } from "../lugar/LugarListRelationFilter";
import { ProductoListRelationFilter } from "../producto/ProductoListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  eventos?: EventoListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  lugars?: LugarListRelationFilter;
  productos?: ProductoListRelationFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
