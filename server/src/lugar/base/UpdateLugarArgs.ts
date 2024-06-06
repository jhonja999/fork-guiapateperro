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
import { LugarWhereUniqueInput } from "./LugarWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LugarUpdateInput } from "./LugarUpdateInput";

@ArgsType()
class UpdateLugarArgs {
  @ApiProperty({
    required: true,
    type: () => LugarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LugarWhereUniqueInput)
  @Field(() => LugarWhereUniqueInput, { nullable: false })
  where!: LugarWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LugarUpdateInput,
  })
  @ValidateNested()
  @Type(() => LugarUpdateInput)
  @Field(() => LugarUpdateInput, { nullable: false })
  data!: LugarUpdateInput;
}

export { UpdateLugarArgs as UpdateLugarArgs };