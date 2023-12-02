import React, { useContext, useState } from 'react'
import { addWishlistProductContext, addcartProductContext } from '../Context/ContextShare'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Wishlist() {
    const {wishlistProduct,setWishlistProduct}=useContext(addWishlistProductContext)
    const {cartProduct,setCartProduct} = useContext(addcartProductContext)

    const removeFromWishlist = (product)=>{
        const result = wishlistProduct.filter(item=>item.id != product)
        setWishlistProduct(result)
    }
    const handleWishlistCart = (product)=>{
        setCartProduct([...cartProduct,product])
        removeFromWishlist(product.id)
    }
    console.log(cartProduct);
  return (
    <div>
      <Row className='ms-5'>
      <Link to='/'>Back to Home</Link>
      {
          wishlistProduct?.length>0?
          wishlistProduct?.map((products,index)=>(
            <Col key={index} className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3} >
              <Card className='shadow rounded' style={{ width: '18rem',height:"26rem" }}>
                <Card.Img variant="top" height={'200px'} src={products?.image} />
                <Card.Body>
                  <Card.Title>{products?.title.slice(0,20)}</Card.Title>
                    <Card.Text>
                      {products?.description.slice(0,55)}...
                    </Card.Text>
                  <div className='d-flex justify-content-around mt-5'>
                    <Button onClick={()=>removeFromWishlist(products.id)}  className='btn btn-danger'>Remove</Button>
                    <Button onClick={()=>handleWishlistCart(products)} className='btn btn-info'>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )): 
          <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
              <img src="https://vastrasanskriti.com/img/empty-wishlist.png" alt="" />
          </div>
        
        }
      </Row>
    </div>
  )
}

export default Wishlist