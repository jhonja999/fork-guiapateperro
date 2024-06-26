/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EventoUpdateManyWithoutUsersInput } from "./EventoUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { LugarUpdateManyWithoutUsersInput } from "./LugarUpdateManyWithoutUsersInput";
import { ProductoUpdateManyWithoutUsersInput } from "./ProductoUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => EventoUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventoUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventoUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  eventos?: EventoUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => ListingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ListingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ListingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  listings?: ListingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => LugarUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LugarUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LugarUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  lugars?: LugarUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => ProductoUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProductoUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProductoUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  productos?: ProductoUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => TripUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TripUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TripUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  trips?: TripUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => WishlistUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WishlistUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WishlistUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  wishlists?: WishlistUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
