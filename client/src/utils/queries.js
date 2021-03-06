import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      image
      image_link
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query PRODUCT($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      price
      quantity
      image
      image_link
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
          image_link
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;