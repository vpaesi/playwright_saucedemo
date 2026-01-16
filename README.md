## Curso em andamento: 
* [Curso básico de Playwright - Canal: Marcos Franco - Start QA](https://www.youtube.com/playlist?list=PLu6sLyecW1TjbX7mSfnoORw9G3RJPCrVs)

## Rodando os testes:
Todos os testes:
Após configurado o `test` do `script` do package.json como: `npx playwright test`, dá pra rodar apenas com: `npm run test`.

Apenas um arquivo:
`npm run test <nome-do-arquivo>`, exemplo: `npm run test produtos`

## Verificando testes na interface
Ao rodar um teste, é criado um `index.html` na pasta `playright-report` que quando aberta no navegador, apresenta o que foi rodado

## Ordem de arquivos criados:
* ``login.spec.ts``
* ``produtos.spec.ts``