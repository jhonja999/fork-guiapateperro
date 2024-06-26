/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Producto } from "./Producto";
import { ProductoCountArgs } from "./ProductoCountArgs";
import { ProductoFindManyArgs } from "./ProductoFindManyArgs";
import { ProductoFindUniqueArgs } from "./ProductoFindUniqueArgs";
import { CreateProductoArgs } from "./CreateProductoArgs";
import { UpdateProductoArgs } from "./UpdateProductoArgs";
import { DeleteProductoArgs } from "./DeleteProductoArgs";
import { Listing } from "../../listing/base/Listing";
import { User } from "../../user/base/User";
import { ProductoService } from "../producto.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Producto)
export class ProductoResolverBase {
  constructor(
    protected readonly service: ProductoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "read",
    possession: "any",
  })
  async _productosMeta(
    @graphql.Args() args: ProductoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Producto])
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "read",
    possession: "any",
  })
  async productos(
    @graphql.Args() args: ProductoFindManyArgs
  ): Promise<Producto[]> {
    return this.service.productos(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Producto, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "read",
    possession: "own",
  })
  async producto(
    @graphql.Args() args: ProductoFindUniqueArgs
  ): Promise<Producto | null> {
    const result = await this.service.producto(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Producto)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "create",
    possession: "any",
  })
  async createProducto(
    @graphql.Args() args: CreateProductoArgs
  ): Promise<Producto> {
    return await this.service.createProducto({
      ...args,
      data: {
        ...args.data,

        listing: {
          connect: args.data.listing,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Producto)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "update",
    possession: "any",
  })
  async updateProducto(
    @graphql.Args() args: UpdateProductoArgs
  ): Promise<Producto | null> {
    try {
      return await this.service.updateProducto({
        ...args,
        data: {
          ...args.data,

          listing: {
            connect: args.data.listing,
          },

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Producto)
  @nestAccessControl.UseRoles({
    resource: "Producto",
    action: "delete",
    possession: "any",
  })
  async deleteProducto(
    @graphql.Args() args: DeleteProductoArgs
  ): Promise<Producto | null> {
    try {
      return await this.service.deleteProducto(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Listing, {
    nullable: true,
    name: "listing",
  })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async getListing(
    @graphql.Parent() parent: Producto
  ): Promise<Listing | null> {
    const result = await this.service.getListing(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Producto): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
