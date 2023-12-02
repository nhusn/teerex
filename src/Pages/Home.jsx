import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { addWishlistProductContext, addcartProductContext } from '../Context/ContextShare';

function Home() {
    const { cartProduct, setCartProduct } = useContext(addcartProductContext)
    const { wishlistProduct, setWishlistProduct } = useContext(addWishlistProductContext)
    const [allProducts, setAllProducts] = useState({})
    const [cart, setCart] = useState([])
    const allProductAPI = async () => {
        const result = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
        setAllProducts(result.data)
    }
    console.log(allProducts);
    const addToCart = (product) => {
        setCartProduct([...cartProduct, product])
    }
    const addToWishlist = (product) => {
        setWishlistProduct([...wishlistProduct, product])
    }
    console.log(wishlistProduct);
    useEffect(() => {
        allProductAPI()
    }, [])
    return (
        <div>
            <Row className='p-5'>
                
                {allProducts.length > 0 ? allProducts.map(product => (
                    <Col lg={4} md={6} sm={12}>
                        <Card style={{ width: '18rem' }} className='mb-4'>
                            <Card.Img height={'250px'} variant="top" src={product.image} className='' />
                            <Card.Body>
                                <Card.Title>{product?.title.slice(0, 20)}</Card.Title>
                                <Card.Text>
                                    {product?.description.slice(0, 55)}...
                                </Card.Text>
                                <h5>${product.price}</h5>
                                <Button className='me-3' onClick={() => addToWishlist(product)}>Add to Wishlist</Button>
                                <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )) : <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-50' src="https://i.pinimg.com/originals/55/0f/b6/550fb6e2f4b248f3eaec00cd956a3d91.jpg" alt="" />
                </div>

                }
            </Row>
        </div>
    )
}

export default Home