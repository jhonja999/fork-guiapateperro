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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { EventoListRelationFilter } from "../../evento/base/EventoListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../../listing/base/ListingListRelationFilter";
import { LugarListRelationFilter } from "../../lugar/base/LugarListRelationFilter";
import { ProductoListRelationFilter } from "../../producto/base/ProductoListRelationFilter";
import { TripListRelationFilter } from "../../trip/base/TripListRelationFilter";
import { WishlistListRelationFilter } from "../../wishlist/base/WishlistListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EventoListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventoListRelationFilter)
  @IsOptional()
  @Field(() => EventoListRelationFilter, {
    nullable: true,
  })
  eventos?: EventoListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ListingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ListingListRelationFilter)
  @IsOptional()
  @Field(() => ListingListRelationFilter, {
    nullable: true,
  })
  listings?: ListingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => LugarListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LugarListRelationFilter)
  @IsOptional()
  @Field(() => LugarListRelationFilter, {
    nullable: true,
  })
  lugars?: LugarListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductoListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductoListRelationFilter)
  @IsOptional()
  @Field(() => ProductoListRelationFilter, {
    nullable: true,
  })
  productos?: ProductoListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TripListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TripListRelationFilter)
  @IsOptional()
  @Field(() => TripListRelationFilter, {
    nullable: true,
  })
  trips?: TripListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WishlistListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WishlistListRelationFilter)
  @IsOptional()
  @Field(() => WishlistListRelationFilter, {
    nullable: true,
  })
  wishlists?: WishlistListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
