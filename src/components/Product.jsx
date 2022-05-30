import React from "react";
import {Text,Image,Box,Stack,Heading, Tag,TagLabel} from '@chakra-ui/react'
const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
