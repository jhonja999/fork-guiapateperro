import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductoUpdateInput = {
  listing?: ListingWhereUniqueInput;
  price?: number;
  productinfo?: InputJsonValue;
  user?: UserWhereUniqueInput;
};
