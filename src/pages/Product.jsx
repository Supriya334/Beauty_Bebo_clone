import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, ButtonGroup, Button, Text, Flex, Box, Grid, Icon } from '@chakra-ui/react'
import data from "../db.json"

{/* <i class='bx bx-shopping-bag'></i> */ }
{/* <i class='bx bxs-heart' ></i> */ }
// { imgSrc, productName, desc, price, strickedOff }

// import { Card, CardBody, Stack, Heading, Text, Image, ButtonGroup, Button } from "@chakra-ui/react";
// import { FaShoppingBag, FaHeart } from "react-icons/fa";

function MyCard({ name, price, desc, stricked, img }) {
    return (
        <Card border="2px solid red" lineHeight="0.3" maxW='sm'>
            <CardBody>
                <Image
                    src={img}
                    alt={name}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>{desc}</Text>
                    {stricked ? (
                        <>
                            <Text textDecoration='line-through' color='gray.400' fontSize='lg'>{price}</Text>
                            <Text color='blue.600' fontSize='lg'>Discounted Price: {price}</Text>
                        </>
                    ) : (
                        <Text color='blue.600' fontSize='lg'>{price}</Text>
                    )}
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                        <i class='bx bxs-shopping-bag'></i>
                            {/* <Icon as={FaShoppingBag}/> Buy now */}
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                        {/* <Icon as={FaHeart}/> */}
                        <i class='bx bxs-heart'></i>
                        </Button>
                    </ButtonGroup>
                </Stack>
            </CardBody>
        </Card>
    );
}




function Product() {
  

    // console.log(Card2)

    return (
        <>

            <div style={{ border: "2px solid red", width: "80%", margin: "auto", display: "flex" }}>
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

                <div className="product-org">
                    <h1>Poduct Page</h1>


                    <Grid gridTemplateColumns="repeat(3,1fr)" id="ProdList">
                        {data.product.map((prod) => <MyCard price={prod.price} name={prod.name} img={prod.imgSrc} />)}

                    </Grid>
                </div>

            </div>
        </>
    )
}
export default Product;