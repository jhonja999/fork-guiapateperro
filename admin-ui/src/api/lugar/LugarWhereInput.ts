import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LugarWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  lugarinfo?: JsonFilter;
  user?: UserWhereUniqueInput;
};
