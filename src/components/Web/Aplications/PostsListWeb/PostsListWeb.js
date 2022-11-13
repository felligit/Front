import React, { useState, useEffect } from "react";
import "./PostsListWeb.scss";
import { Spin, List, notification } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import queryString from "query-string";
import Pagination from "../../../Pagination";
import { Helmet } from "react-helmet";
import { getPostsApi } from "../../../../api/post";
import "moment/locale/es";

export default function PostsListWeb(props) {
  const { location, history } = props;
  const [posts, setPosts] = useState(null);
  const { page = 1 } = queryString.parse(location.search);
  useEffect(() => {
    getPostsApi(12, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPosts(response.posts);
        }
      })
      .catch(() => {
        notification["error"]({ message: "Error del servidor" });
      });
  }, [page]);
  if (!posts) {
    return (
      <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }}></Spin>
    );
  }
  return (
    <>
      <Helmet>
        <title>Productos | Codesa</title>
        <meta
          name="description"
          content="Productos | Lista de productos que ofrecemos | Codesa"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="post-list-web">
        <h1>Productos</h1>
        <p>
          Estos son algunos de los productos entregados a personas
          independientes y establecimientos comerciales{" "}
        </p>

        <List
          dataSource={posts.docs}
          renderItem={(post) => <Post post={post}></Post>}
        ></List>
        <Pagination
          posts={posts}
          location={location}
          history={history}
        ></Pagination>
      </div>
    </>
  );
}

function Post(props) {
  const { post } = props;
  const day = moment(post.date).format("DD");
  const month = moment(post.date).format("MMMM");
  return (
    <List.Item className="post">
      <div className="post__date">
        <span>{day}</span>
        <span>{month}</span>
      </div>
      <Link to={`apps/${post.url}`}>
        <List.Item.Meta title={post.title} />
      </Link>
    </List.Item>
  );
}
