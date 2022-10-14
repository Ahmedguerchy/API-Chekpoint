import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCards = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{user.username}</ListGroupItem>
          <ListGroupItem>{user.website}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={`/UserDetails/${user.id}`}>
          <Button variant="info">Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCards;
