import React from 'react';
import Course from './Course';
import { useQuery, gql } from "@apollo/client";

const query = gql`{
  products(first: 5, channel: "default-channel") {
    edges {
      node {
        id
        name
        description
      }
    }
  }
}`;

const Product = () => {

  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.products.edges.map((product) => (
    <Course product={product.node} />
  ));

};
export default Product;