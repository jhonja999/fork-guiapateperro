import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventoService } from "./evento.service";
import { EventoControllerBase } from "./base/evento.controller.base";

@swagger.ApiTags("eventos")
@common.Controller("eventos")
export class EventoController extends EventoControllerBase {
  constructor(
    protected readonly service: EventoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
