import { gql } from 'graphql-request';

export const GET_PRODUTOS = gql`
  query GetProdutos {
    produtos(first: 600, orderBy: createdAt_DESC) {
      id
      nomeDoProduto
      slugDoProduto
      resumoDoProduto
      caracteristicasDoProduto
      descricaoCompletaDoProduto {
        raw
      }
      especificacoesTecnicas
      beneficiosDoProduto
      tempoDeEntrega
      tempoDeGarantia
      precoDoProduto
      quantidadeMinimaAEncomendar
      imagemDoProduto {
        url
        fileName
      }
      categoriaDoProduto
      createdAt
    }
  }
`;


export const GET_PRODUTO_BY_SLUG = gql`
  query GetProdutoBySlug($slug: String!) {
    produto(where: { slugDoProduto: $slug }) {
      nomeDoProduto
      slugDoProduto
      resumoDoProduto
      caracteristicasDoProduto
      descricaoCompletaDoProduto {
        raw
      }
      especificacoesTecnicas
      beneficiosDoProduto
      tempoDeEntrega
      tempoDeGarantia
      precoDoProduto
      quantidadeMinimaAEncomendar
      imagemDoProduto {
        url
        fileName
      }
      categoriaDoProduto
      createdAt
    }
  }
`;