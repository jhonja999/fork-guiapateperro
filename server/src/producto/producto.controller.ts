import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductoService } from "./producto.service";
import { ProductoControllerBase } from "./base/producto.controller.base";

@swagger.ApiTags("productos")
@common.Controller("productos")
export class ProductoController extends ProductoControllerBase {
  constructor(
    protected readonly service: ProductoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
