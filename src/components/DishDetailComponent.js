import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  renderDish(dish) {
    if (dish !== null) {
      return (
        <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    }
  }

  renderComments(comments) {
    if (comments !== null) {
      const commentsArr = comments.map(comment => {
        return (

          <CardBody>
            <CardText>{comment.comment}</CardText>
            <CardText>-- {comment.author} {comment.date}</CardText>
          </CardBody>

        )
      }
      )
      return (
        <div>
          <h4>Comments</h4>
          {commentsArr}
        </div>

      )
    } else {
      return (<div></div>)
    }
  }





  render() {
    return (
      <div className='row'>
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.comments)}
        </div>
      </div>
    )
  }
}

export default DishDetail
