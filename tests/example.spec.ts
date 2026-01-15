import { test, expect } from '@playwright/test';

test('acessando a página do playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/'); //acessa a página

  const botaoGetStarted = page.getByText('Get Started'); //localiza o elemento com texto "Get Started"
  await botaoGetStarted.click(); //clica no botão "Get Started"
  await page.waitForURL('**/docs/intro'); //espera a navegação para a URL que contém "/docs/intro"
});
