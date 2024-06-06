import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LugarCreateInput = {
  listing?: ListingWhereUniqueInput | null;
  lugarinfo?: InputJsonValue;
  user: UserWhereUniqueInput;
};
