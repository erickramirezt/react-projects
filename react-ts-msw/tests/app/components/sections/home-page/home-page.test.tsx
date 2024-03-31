import { HomePage } from '../../../../../src/pages/application/home-page'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, describe, beforeEach, beforeAll, afterAll, afterEach } from 'vitest'
import { server } from '../../../../mocks/server'
import { HttpResponse, http } from 'msw'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})

describe('home page', () => {
  beforeEach(() => {
    cleanup()
  })

  test('checking whether vite and react text is available', () => {
    render(<HomePage />)
    const text = screen.getByRole('heading', { name: 'Vite + React' })
    expect(text).toBeDefined()
  })

  test('should increment count on click', async () => {
    render(<HomePage />)
    const user = userEvent.setup()
    user.click(screen.getByRole('button', { name: 'count is 0' }))
    expect(await screen.findByText('count is 1')).toBeDefined()
  })

  test('api success scenario on load', async () => {
    render(<HomePage />)
    expect(await screen.findByText('Todo List: 1')).toBeDefined()
  })
  
  test('api failure scenario on load', async () => {
    server.use(
      http.get('https://dummyjson.com/todos', () => {
        return new HttpResponse(null, { status: 500 })
      })
    )
    render(<HomePage />)
    expect(await screen.findByText('Todo List: 1')).toBeUndefined()
  })
})
