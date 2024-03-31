import { test, expect } from '@playwright/test'
import { BASE_TEST_URL } from './test-urls'

test('Home page loads successfully', async ({ page }) => {
  await page.goto(BASE_TEST_URL)

  const counter = page.getByRole('button', { name: 'count is 0' })
  await counter.click()

  const result = page.getByRole('button', { name: 'count is 1' })
  await expect(result).toBeDefined()
})
