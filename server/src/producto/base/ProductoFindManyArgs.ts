/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductoWhereInput } from "./ProductoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductoOrderByInput } from "./ProductoOrderByInput";

@ArgsType()
class ProductoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductoWhereInput, { nullable: true })
  @Type(() => ProductoWhereInput)
  where?: ProductoWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductoOrderByInput], { nullable: true })
  @Type(() => ProductoOrderByInput)
  orderBy?: Array<ProductoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductoFindManyArgs as ProductoFindManyArgs };
