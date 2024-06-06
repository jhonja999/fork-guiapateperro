/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsNumber,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { Listing } from "../../listing/base/Listing";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { User } from "../../user/base/User";

@ObjectType()
class Producto {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Listing,
  })
  @ValidateNested()
  @Type(() => Listing)
  listing?: Listing;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  productinfo!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}

export { Producto as Producto };
