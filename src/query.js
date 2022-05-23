query {
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


     