import React from 'react'
import {
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
} from 'react-bootstrap'
import Moment from 'react-moment'

const Article = ({ article }) => {
  return (
    <>
      <Container className='mt-5'>
        <Row className='justify-content-lg-center'>
          <Col lg={6}>
            <Card className='text-center'>
              <a href={article.url}>
                <Card.Img variant='top' src={article.imageUrl} />
              </a>
              <Card.Body>
                <Card.Title>
                  <a href={article.url}>
                    {' '}
                    <h4>{article.title}</h4>
                  </a>
                </Card.Title>
                <Card.Text>{article.summary}</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush text-center'>
                <ListGroupItem>{article.newsSite}</ListGroupItem>
                <ListGroupItem>
                  <Moment format='MM/DD/YY'>{article.publishedAt}</Moment>
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href={article.url}>{article.url}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Article
