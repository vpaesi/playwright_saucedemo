import { test, expect } from "@playwright/test";

test("deve logar com sucesso no saucedemo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/"); //navega até a página do saucedemo
  await expect(await page.title()).toBe("Swag Labs"); //verifica se o título da página está correto

  await page.locator('[data-test="username"]').fill("standard_user"); //localiza e preenche o campo de usuário
  await page.locator('[data-test="password"]').fill("secret_sauce"); //localiza e preenche o campo de senha

  await page.locator('[data-test="login-button"]').click(); //clica no botão de login
  await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html"); //verifica se a URL após o login está correta


  const tituloPaginaProdutos = await page.locator('.header_secondary_container > span.title').textContent(); //localiza o título da página de produtos
  await expect(tituloPaginaProdutos).toBe("Products"); //verifica se o título da página de produtos está correto
});

test("não deve logar com senha inválida no saucedemo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("invalid_password"); //preenche o campo de senha com um valor inválido
    await page.locator('[data-test="login-button"]').click(); 

    const mensagemErro = await page.getByText("Epic sadface: Username and password do not match any user in this service"); //localiza a mensagem de erro exibida
    await expect(mensagemErro).toBeVisible(); //verifica se a mensagem de erro está visível
});
