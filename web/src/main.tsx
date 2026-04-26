import { StrictMode } from 'react'
import { sumOfArray } from '@internal/math'
import { createRoot } from 'react-dom/client'
import { MyEntity } from '@internal/entities'

import { App } from '@/app'

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

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
