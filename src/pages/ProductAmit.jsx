import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import data from "../db.json";

function ProdCard({ img, title, price, discount,strOffPrice }) {
  let numb=parseInt(price)
  console.log(typeof(price),typeof(numb))
  return (
    <Card maxW="sm" lineHeight={1}>
      <CardBody textAlign="center" borderRadius={0}>
        <Image src={img} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Text size="md">{title}</Text>
          <Flex justifyContent="center">
            <Text as="s" color="grey" decoration="striked" >{`${Math.floor(Math.random(0,price)*1000)}%`}</Text>
            <Text color="blue.600" fontSize="xl">{price}</Text>
            <Text color="green">{`${Math.floor(Math.random(0,100)*100)}%`}</Text>

          </Flex>
        </Stack>
        <ButtonGroup spacing='2'>
                        <Button  backgroundColor= "rgb(225, 9, 135)" variant='solid' colorScheme='blue'>
                        <i class='bx bxs-shopping-bag'></i>Add To Cart
                            {/* <Icon as={FaShoppingBag}/> Buy now */}
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                        {/* <Icon as={FaHeart}/> */}
                        <i class='bx bxs-heart'></i>
                        </Button>
                    </ButtonGroup>
      </CardBody>
    </Card>
  );
}

function Product() {
  return (
    <Flex>
      <div className="all-categories">
        {/* work to be done */}


        <div className="all-cate-comp">


          <ul>
            <i class='bx bx-list-ul'></i>
            All Categories

            <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" /> Makeup
            </li>


            <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" />Skin </li>



            <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="" /> Hair</li>


            <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="" /> Personal Care</li>



            <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="" />Mom & Baby Care </li>


            <li className="flex"> <img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="" /> Fragrance</li>


            <li className="flex"> <img src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="" /> Ayurveda</li>
          </ul>
        </div>
      </div>

      <Box p={2} w="80%">
        <Text m={2}>MAKEUP</Text>
        <Flex justifyContent="space-between">
          <Select m={2} w="200px">
            <option value="name">Position</option>
            <option value="name">Product Name</option>
            <option value="new">New Arrival</option>
          </Select>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </ButtonGroup>
        </Flex>
        <Divider />
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.product.map((item) => (
            <ProdCard
              img={item.imgSrc}
              title={item.productName}
              price={item.price}
              strOffPrice={item.strikedOff}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Product;
