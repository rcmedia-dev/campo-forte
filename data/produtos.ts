import { gql } from 'graphql-request';

export const GET_PRODUTOS = gql`
  query {
    produtos {
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