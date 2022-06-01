import { gql } from "@apollo/client";

const getAllQuery = gql`
    query {
        categories {
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
`;

const getCategoriesQuery = gql`
    query {
        categories {
            name
        }
    }
`;

const getProductsQuery = gql`
    query ($input: CategoryInput) {
        category(input: $input) {
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
    query ($id: String!) {
        product(id: $id) {
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

const getCurrenciesQuery = gql`
    query {
        currencies {
            label
            symbol
        }
    }
`;

export {
    getAllQuery,
    getCategoriesQuery,
    getProductsQuery,
    getSingleProductQuery,
    getCurrenciesQuery,
};
