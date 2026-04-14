import { sumOfArray } from '@internal/math'
import { MyEntity } from '@internal/entities'

const entities: MyEntity[] = [
  {
    amount: 1,
    name: 'first',
  },
  {
    amount: 2,
    name: 'second',
  },
]

console.log(sumOfArray(entities.map(({ amount }) => amount)))
