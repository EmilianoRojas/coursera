import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
  if (comments == null) {
    return (
      <div></div>
    );
  }

  const commentList = comments.map((comment) => {
    return (
      <li >
        {comment.comment}
        <br />
                    --{comment.author}, {comment.date}
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

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-sm-5 m-1">
            <RenderComments comments={props.dish.comments} />
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



export default DishDetail;
