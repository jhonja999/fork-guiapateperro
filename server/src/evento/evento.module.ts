import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventoModuleBase } from "./base/evento.module.base";
import { EventoService } from "./evento.service";
import { EventoController } from "./evento.controller";
import { EventoResolver } from "./evento.resolver";

@Module({
  imports: [EventoModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventoController],
  providers: [EventoService, EventoResolver],
  exports: [EventoService],
})
export class EventoModule {}
