import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LugarModuleBase } from "./base/lugar.module.base";
import { LugarService } from "./lugar.service";
import { LugarController } from "./lugar.controller";
import { LugarResolver } from "./lugar.resolver";

@Module({
  imports: [LugarModuleBase, forwardRef(() => AuthModule)],
  controllers: [LugarController],
  providers: [LugarService, LugarResolver],
  exports: [LugarService],
})
export class LugarModule {}
