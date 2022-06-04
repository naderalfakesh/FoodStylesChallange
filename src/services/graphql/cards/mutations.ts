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
  mutation {
    shareCard(id: 1)
  }
`;

export const DUPLICATE_CARD = gql`
  mutation {
    duplicateCard(id: 1) {
      id
      name
    }
  }
`;
export const DELETE_CARD = gql`
  mutation {
    deleteCard(id: 1)
  }
`;
