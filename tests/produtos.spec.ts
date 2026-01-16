import { test, expect } from "@playwright/test";

test.describe("Validação dos produtos no Saucedemo", () => {
  test("validar titulos dos produtos", async ({ page }) => {
    test.fail(); //sinalizado que o teste deve falhar pois tem um título fora do padrão esperado

    await test.step("login", async () => {
      await page.goto("https://www.saucedemo.com/");
      await page.locator('[data-test="username"]').fill("standard_user");
      await page.locator('[data-test="password"]').fill("secret_sauce");
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step("verificação dos títulos dos produtos", async () => {
      const localizaTitulosProdutos = await page
        .locator(".inventory_item_name")
        .allTextContents(); //localiza todos os títulos dos produtos
      const titulosProdutos = localizaTitulosProdutos;

      for (const item of titulosProdutos) {
        await expect(item.slice(0, 10)).toBe("Sauce Labs"); //verifica se os títulos dos produtos começam com "Sauce Labs"
      }
    });
  });
});
