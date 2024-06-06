import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LugarService } from "./lugar.service";
import { LugarControllerBase } from "./base/lugar.controller.base";

@swagger.ApiTags("lugars")
@common.Controller("lugars")
export class LugarController extends LugarControllerBase {
  constructor(
    protected readonly service: LugarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
