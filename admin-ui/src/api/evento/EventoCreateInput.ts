import { InputJsonValue } from "../../types";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventoCreateInput = {
  eventoinfo: InputJsonValue;
  listing: ListingWhereUniqueInput;
  user: UserWhereUniqueInput;
};
