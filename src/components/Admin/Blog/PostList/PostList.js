import React from "react";
import { List, Button, Icon, Modal, notification } from "antd";
import { Link } from "react-router-dom";
import "./PostList.scss";
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePostApi } from "../../../../api/post";

const { confirm } = Modal;

export default function PostList(props) {
  const { posts, setReloadPosts, editPost } = props;

  const deletePost = (post) => {
    const accessToken = getAccessTokenApi();
    console.log(post);
    confirm({
      title: "Eliminando Post",
      content: `¿Estas seguro de eliminar el post ${post.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletePostApi(accessToken, post._id)
          .then((response) => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message,
            });
            setReloadPosts(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor.",
            });
          });
      },
    });
  };

  function Post(props) {
    const { post, deletePost, editPost } = props;
    return (
      <List.Item
        actions={[
          <Link to={`/apps/${post.url}`} target="_blank">
            <Button type="primary">
              <Icon type="eye" />
            </Button>
          </Link>,
          <Button type="primary" onClick={() => editPost(post)}>
            <Icon type="edit" />
          </Button>,

          <Button type="danger" onClick={() => deletePost(post)}>
            <Icon type="delete" />
          </Button>,
        ]}
      >
        <List.Item.Meta title={post.title} />
      </List.Item>
    );
  }

  return (
    <div className="post-list">
      <h2>PostList</h2>
      <List
        dataSource={posts.docs}
        renderItem={(post) => (
          <Post post={post} deletePost={deletePost} editPost={editPost} />
        )}
      />
    </div>
  );
}
