import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';
import { Drink } from '../../common/interfaces/drink.interface';

@Entity()
@ObjectType({ description: 'Coffee Model', implements: () => Drink })
export class Coffee implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique identifier' })
  id: number;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  brand: string;
  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];
  @CreateDateColumn()
  createdAt?: Date;
}
