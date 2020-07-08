import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  convertDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments == null) {
      return (
        <div></div>
      );
    }

    const commentList = comments.map((comment) => {
      return (
        <li>
          {comment.comment}
          <br />
                    --{comment.author}, {this.convertDate(comment.date)}
          <br />
          <br />
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentList}</ul>
      </div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-sm-5 m-1">
              {this.renderComments(this.props.dish.comments)}
            </div>
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
}

export default DishDetail;
