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


const getProductsQuery = gql`
query {
  category
  {
  products {
    id
    name
    inStock
    gallery
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
`;

const getSingleProductQuery = gql`
    query{
        product(id: "ps-5") {
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
`;

export {getAllQuery, getCategoriesQuery, getProductsQuery, getSingleProductQuery}