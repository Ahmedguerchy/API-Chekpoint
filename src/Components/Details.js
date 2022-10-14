import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const Details = () => {
  const [person, setPerson] = useState();
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setPerson(res.data))
      .then((res) => setloading(false))
      .catch((err) => console.log(err));
  }, []);
  console.log("loading", loading);
if (loading) {
     return <ClipLoader color="#36d7b7" />
   }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15rem",
      }}
    >
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
     
        <Card style={{ width: "33rem" }}>
          <Card.Body>
          <Card.Img
          variant="top"
          src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
        />
            <Card.Title>{person.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {person.phone}
            </Card.Subtitle>
            <Card.Text>
              {person && person.address && person.address.street}
            </Card.Text>
            <Card.Text>
              {person.email}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Details;
