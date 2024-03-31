import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Counter } from '../../../../../src/app/components/sections/home-page/counter'

test('counter', async () => {
  render(<Counter />)

  const user = userEvent.setup()

  const button = screen.getByRole('button')
  await user.tripleClick(button)

  const result = button.innerHTML.includes('3')
  expect(result).toBeTruthy()
})
