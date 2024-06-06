import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductoWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  price?: FloatFilter;
  productinfo?: JsonFilter;
  user?: UserWhereUniqueInput;
};
