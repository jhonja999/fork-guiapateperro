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
import { IsDate, IsString, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Evento } from "../../evento/base/Evento";
import { Listing } from "../../listing/base/Listing";
import { Lugar } from "../../lugar/base/Lugar";
import { Producto } from "../../producto/base/Producto";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Trip } from "../../trip/base/Trip";
import { Wishlist } from "../../wishlist/base/Wishlist";

@ObjectType()
class User {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Evento],
  })
  @ValidateNested()
  @Type(() => Evento)
  @IsOptional()
  eventos?: Array<Evento>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Listing],
  })
  @ValidateNested()
  @Type(() => Listing)
  @IsOptional()
  listings?: Array<Listing>;

  @ApiProperty({
    required: false,
    type: () => [Lugar],
  })
  @ValidateNested()
  @Type(() => Lugar)
  @IsOptional()
  lugars?: Array<Lugar>;

  @ApiProperty({
    required: false,
    type: () => [Producto],
  })
  @ValidateNested()
  @Type(() => Producto)
  @IsOptional()
  productos?: Array<Producto>;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [Trip],
  })
  @ValidateNested()
  @Type(() => Trip)
  @IsOptional()
  trips?: Array<Trip>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => [Wishlist],
  })
  @ValidateNested()
  @Type(() => Wishlist)
  @IsOptional()
  wishlists?: Array<Wishlist>;
}

export { User as User };
