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
import { Type } from "class-transformer";

@ArgsType()
class ProductoCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProductoWhereInput,
  })
  @Field(() => ProductoWhereInput, { nullable: true })
  @Type(() => ProductoWhereInput)
  where?: ProductoWhereInput;
}

export { ProductoCountArgs as ProductoCountArgs };