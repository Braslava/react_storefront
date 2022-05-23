import { gql } from "@apollo/client";

const getAllQuery = gql`query {
	categories
    {
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        items {
          displayValue
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
       brand
    }
  }
}
`

const getCategoriesQuery = gql`
    query {
        categories {
            name
        }
    }
`;

export {getAllQuery, getCategoriesQuery}