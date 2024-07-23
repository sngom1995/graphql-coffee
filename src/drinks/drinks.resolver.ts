import { Query, Resolver } from '@nestjs/graphql';
import { Drink } from '../common/interfaces/drink.interface';
import { Coffee } from '../coffees/entities/coffee.entity';
import { Tea } from '../teas/entities/tea.entity';

@Resolver()
export class DrinksResolver {
  @Query(() => [Drink], { name: 'drinks' })
  async findAll() {
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'L Or';
    coffee.brand = 'Test';
    const tea = new Tea();
    tea.name = 'Lipton';
    return [coffee, tea];
  }
}
