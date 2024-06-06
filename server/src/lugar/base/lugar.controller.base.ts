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
import { LugarService } from "../lugar.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LugarCreateInput } from "./LugarCreateInput";
import { Lugar } from "./Lugar";
import { LugarFindManyArgs } from "./LugarFindManyArgs";
import { LugarWhereUniqueInput } from "./LugarWhereUniqueInput";
import { LugarUpdateInput } from "./LugarUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LugarControllerBase {
  constructor(
    protected readonly service: LugarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Lugar })
  @nestAccessControl.UseRoles({
    resource: "Lugar",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLugar(@common.Body() data: LugarCreateInput): Promise<Lugar> {
    return await this.service.createLugar({
      data: {
        ...data,

        listing: data.listing
          ? {
              connect: data.listing,
            }
          : undefined,

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        lugarinfo: true,
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
  @swagger.ApiOkResponse({ type: [Lugar] })
  @ApiNestedQuery(LugarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Lugar",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async lugars(@common.Req() request: Request): Promise<Lugar[]> {
    const args = plainToClass(LugarFindManyArgs, request.query);
    return this.service.lugars({
      ...args,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        lugarinfo: true,
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
  @swagger.ApiOkResponse({ type: Lugar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Lugar",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async lugar(
    @common.Param() params: LugarWhereUniqueInput
  ): Promise<Lugar | null> {
    const result = await this.service.lugar({
      where: params,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        lugarinfo: true,
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
  @swagger.ApiOkResponse({ type: Lugar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Lugar",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLugar(
    @common.Param() params: LugarWhereUniqueInput,
    @common.Body() data: LugarUpdateInput
  ): Promise<Lugar | null> {
    try {
      return await this.service.updateLugar({
        where: params,
        data: {
          ...data,

          listing: data.listing
            ? {
                connect: data.listing,
              }
            : undefined,

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          lugarinfo: true,
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
  @swagger.ApiOkResponse({ type: Lugar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Lugar",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLugar(
    @common.Param() params: LugarWhereUniqueInput
  ): Promise<Lugar | null> {
    try {
      return await this.service.deleteLugar({
        where: params,
        select: {
          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          lugarinfo: true,
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
