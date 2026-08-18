# ePlay — Carrinho com Redux

Projeto desenvolvido como atividade prática da EBAC. A aplicação reproduz a identidade visual do layout ePlay disponibilizado no material de apoio e apresenta um catálogo de jogos com navegação, detalhes dos produtos e carrinho de compras.

## Funcionalidades

- catálogo responsivo de jogos;
- página de detalhes de cada produto;
- galeria de imagens com modal;
- adição de jogos ao carrinho;
- prevenção de itens duplicados;
- remoção e limpeza do carrinho;
- contador de itens atualizado automaticamente;
- cálculo dinâmico do valor total da compra;
- valores formatados em Real brasileiro.

## Redux

O carrinho é controlado pelo Redux Toolkit. As ações de adicionar, remover e limpar itens ficam no `cartSlice`, enquanto os componentes acessam a Store por hooks tipados do React Redux. O total é calculado a partir dos produtos armazenados na Store.

## Tecnologias

- React
- TypeScript
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- Styled Components

## Executar localmente

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run lint
npm run build
```

## Projeto online

O endereço da versão publicada será incluído após o deploy.
