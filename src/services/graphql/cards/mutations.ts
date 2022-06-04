import { gql } from '@apollo/client';

export const CREAT_CARD = gql`
  mutation {
    createCard(
      data: {
        name: "My Food Style"
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;

export const SHARE_CARD = gql`
  mutation shareCard($id: ID!) {
    shareCard(id: $id)
  }
`;

export const DUPLICATE_CARD = gql`
  mutation duplicateCard($id: ID!) {
    duplicateCard(id: $id) {
      id
      name
    }
  }
`;
export const DELETE_CARD = gql`
  mutation deleteCard($id: ID!) {
    deleteCard(id: $id)
  }
`;
