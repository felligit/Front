import React from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import PostsListWeb from "../components/Web/Aplications/PostsListWeb";
import PostInfo from "../components/Web/Aplications/PostInfo";

export default function Aplications(props) {
  const { url } = useParams();
  const { location, history } = props;
  console.log(location);
  console.log(history);
  return (
    <Row>
      <Col xs={4} />
      <Col xs={16}>
        {url ? (
          <div>
            <PostInfo url={url} />
          </div>
        ) : (
          <div>
            <PostsListWeb location={location} history={history} />
          </div>
        )}
      </Col>
      <Col xs={4} />
    </Row>
  );
}
