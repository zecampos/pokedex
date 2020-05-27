# Pokedéx

Este projeto foi criado para consumir a API [PokéAPI](https://pokeapi.co/).
Nesta aplicação você pode consultar os pokemóns e ver alguns detalhes como HP, velocidade e habilidades.
obs: Não foi possível implementar o scroll infinite para paginação, pois existe um bug na flatlist que não consegui resolver no tempo proposto.

## Demostração

<img src="https://github.com/zecampos/pokedex/blob/master/pokedex.gif" width="480" height="436">

## Principais Tecnologias usadas.

- [React Native](https://github.com/facebook/react-native)

> A framework for building native apps with React.

- [Styled Components](https://styled-components.com/)

> Visual primitives for the component age.

- [React Naigation 5](https://reactnavigation.org/)

> Routing and navigation for your React Native apps

- [Axios](https://github.com/axios/axios)

> Promise based HTTP client for the browser and node.js

## Rodando o projeto

- Clone this project

```
git clone https://github.com/zecampos/pokedex.git
```

- [Instale NodeJS](https://nodejs.org/en/) em seu computador.

- [Instale yarn](https://yarnpkg.com/en/docs/install) em seu computador.

  > O Yarn é um gerenciador de pacotes que também funciona como gerente de projetos. Quer você trabalhe em projetos únicos ou em grandes monorepos, como um hobby ou um usuário corporativo, temos tudo a ver.

- Rode o comando `yarn` no seu terminal, dentro do diretório do projeto.
  > Este comando vai procurar as dependências no arquivo _package.json_ e instalar os pacotes listados.

### Configuração do ambiente de desenvolvimento

- Para configurar o ambientes de desenvolvimento para IOS e Android, siga a [Documentação](https://reactnative.dev/docs/environment-setup) oficial de acordo com o seu sistema operacional.(selecione "React Native CLI Quickstart")
