import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql/language';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  parseLiteral(valueNode: ValueNode): Date {
    if (valueNode.kind === Kind.INT) {
      return new Date(valueNode.value);
    }
    return null;
  }

  parseValue(inputValue: number): Date {
    return new Date(inputValue);
  }

  serialize(outputValue: Date): number {
    console.log(`Serrializing ${outputValue}`);
    return outputValue.getTime();
  }
}
