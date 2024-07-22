import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'Coffee Model' })
export class Coffee {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique identifier' })
  id: number;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  brand: string;
  @Column({ type: 'json' })
  @Field(() => [String])
  flavors: string[];
}
