import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LugarUpdateInput = {
  listing?: ListingWhereUniqueInput | null;
  lugarinfo?: InputJsonValue;
  user?: UserWhereUniqueInput;
};
