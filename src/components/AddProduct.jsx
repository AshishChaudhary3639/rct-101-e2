import React from "react";

import { Button, Modal,ModalBody,Input,Select,RadioGroup,Radio } from '@chakra-ui/react'
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <>
      <Button></Button>
      <Modal >
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" placeholder="Title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Paint</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Price"/>
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  )
}













export default AddProduct;
