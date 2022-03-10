import React, { Component } from 'react';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Navigationbar from './Components/Navigationbar';

class Catalog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Navigationbar />
        <Row className='nomargin'>
          <Col className='sidebar' xs={3} sm={2} xl={2} xll={2}>
            <div className='caraname'>Materials :</div>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Bois`}
                  />
                </div>
              ))}
            </Form>
            <div className='caraname'>Type :</div>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Bois`}
                  />
                </div>
              ))}
            </Form>
            <div className='caraname'>Shape :</div>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Bois`}
                  />
                </div>
              ))}
            </Form>

            <Form className="d-flex">
              <FormControl
                name="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
            </Form>
          </Col>

          <Col xs={8} sm={10} xl={10} xll={10}>
            <Row className='space10 catalog'>
              {
                this.props.articles.data &&
                this.props.articles.data.filter(articles =>
                  articles.attributes.Name.toLowerCase().includes(this.state.search.toLowerCase()))
                  .map((articles, i) =>
                    <Col xs={12} sm={4} xl={4} xll={4}>
                      <Cardsarticles articles={articles} />
                    </Col>
                  )}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Catalog;