/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EventoService } from "../evento.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventoCreateInput } from "./EventoCreateInput";
import { Evento } from "./Evento";
import { EventoFindManyArgs } from "./EventoFindManyArgs";
import { EventoWhereUniqueInput } from "./EventoWhereUniqueInput";
import { EventoUpdateInput } from "./EventoUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventoControllerBase {
  constructor(
    protected readonly service: EventoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Evento })
  @nestAccessControl.UseRoles({
    resource: "Evento",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEvento(@common.Body() data: EventoCreateInput): Promise<Evento> {
    return await this.service.createEvento({
      data: {
        ...data,

        listing: {
          connect: data.listing,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        eventoinfo: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Evento] })
  @ApiNestedQuery(EventoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Evento",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async eventos(@common.Req() request: Request): Promise<Evento[]> {
    const args = plainToClass(EventoFindManyArgs, request.query);
    return this.service.eventos({
      ...args,
      select: {
        createdAt: true,
        eventoinfo: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Evento })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Evento",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async evento(
    @common.Param() params: EventoWhereUniqueInput
  ): Promise<Evento | null> {
    const result = await this.service.evento({
      where: params,
      select: {
        createdAt: true,
        eventoinfo: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Evento })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Evento",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEvento(
    @common.Param() params: EventoWhereUniqueInput,
    @common.Body() data: EventoUpdateInput
  ): Promise<Evento | null> {
    try {
      return await this.service.updateEvento({
        where: params,
        data: {
          ...data,

          listing: {
            connect: data.listing,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          eventoinfo: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Evento })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Evento",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEvento(
    @common.Param() params: EventoWhereUniqueInput
  ): Promise<Evento | null> {
    try {
      return await this.service.deleteEvento({
        where: params,
        select: {
          createdAt: true,
          eventoinfo: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}