import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { LocalForm, Control, Errors } from 'react-redux-form';


function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className='list-unstyled'>
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {comment.date}</p>
              </li>
            )
          })}
        </ul>
        <FormComment dishId={dishId} addComment={addComment} />

      </div>
    );
  } else {
    return (
      <div> </div>
    )
  }
}



class FormComment extends Component {
  constructor(props) {
    super(props);
    this.state = {

      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleSubmit(values) {
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
  }



  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className='fa fa-edit fa-lg'></span> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <div className="col-12 col-md-9">
              <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <Row className='form-group'>
                  <Label md={12}>Rating</Label>
                  <Col md={{ size: 10, offset: 1 }}>
                    <Control.select name="rating"
                      className='form-control'
                      model='.rating'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Label md={12} htmlFor="author">Your Name</Label>
                  <Col md={{ size: 10, offset: 1 }}>
                    <Control.text id='author' name='author' model='.author' className='form-group' placeholder='Your name'
                      validators={{
                        required, minLength: minLength(3), maxLength: maxLength(15)
                      }} />
                    <Errors className='text-danger' model='.author' show='touched' messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be less than 15 characters'
                    }} />
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Label md={12} htmlFor="comment" >Comment</Label>
                  <Col md={{ size: 10, offset: 1 }}>
                    <Control.textarea model='.comment' id='comment' name='comment' className='form-group' rows="6" />
                  </Col>
                </Row>
                <Row className='form-group'>
                  <Col md={{ size: 10 }}>
                    <Button type="submit" color="primary">
                      Submit
                  </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </div>

    )
  }
}

const maxLength = len => val => !(val) || (val.length <= len)
const minLength = len => val => val && (val.length >= len)
const required = val => val && val.length;

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3> <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
        </div>
      </div>
    );
  }
  else {
    return (
      <div></div>
    );
  }

}



export default DishDetail;
