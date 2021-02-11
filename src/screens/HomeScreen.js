import React, { useState, useEffect } from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import logo from '../logo.png'
import axios from 'axios'
import SpinnerComponent from '../components/Spinner'
import Article from '../components/Article'

const HomeScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://test.spaceflightnewsapi.net/api/v2/articles`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <SpinnerComponent />
  }

  return (
    <>
      <div className='main container text-center'>
        <h1 className='display-4'>Latest Spaceflight News</h1>
        <hr />
        <Image src={logo} height={100} alt='Spacefilght news logo' />
      </div>
      <Container>
        <Row>
          <Col>
            <section className='cards'>
              {data.map((article, id) => (
                <Article key={id} article={article} />
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
