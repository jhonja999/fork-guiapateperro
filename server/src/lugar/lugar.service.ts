import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LugarServiceBase } from "./base/lugar.service.base";

@Injectable()
export class LugarService extends LugarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
