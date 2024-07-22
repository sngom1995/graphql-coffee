import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create coffee input type' })
export class CreateCoffeeInput {
  id?: number;
  @Field(() => String, { description: 'New coffee name' })
  name: string;
  brand: string;
  flavors: string[];
}
