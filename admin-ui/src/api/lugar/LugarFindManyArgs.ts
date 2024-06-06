import { LugarWhereInput } from "./LugarWhereInput";
import { LugarOrderByInput } from "./LugarOrderByInput";

export type LugarFindManyArgs = {
  where?: LugarWhereInput;
  orderBy?: Array<LugarOrderByInput>;
  skip?: number;
  take?: number;
};
