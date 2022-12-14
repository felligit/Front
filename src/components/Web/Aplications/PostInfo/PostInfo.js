import React, { useState, useEffect } from "react";
import "./PostInfo.scss";
import { Spin, notification, message } from "antd";
import moment from "moment";
import { Helmet } from "react-helmet";
import { getPostApi } from "../../../../api/post";
import "moment/locale/es";

export default function PostInfo(props) {
  const { url } = props;
  const [postInfo, setPostInfo] = useState(null);
  console.log(postInfo);
  useEffect(() => {
    getPostApi(url)
      .then((response) => {
        if (response.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPostInfo(response.post);
        }
      })
      .catch(() => {
        notification["warning"]({
          message: "Error del servidor.",
        });
      });
  }, [url]);
  if (!postInfo) {
    return (
      <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }}></Spin>
    );
  }
  return (
    <>
      <Helmet>
        <title>{postInfo.title} | Codesa</title>
        <meta
          name="description"
          content="Información detallada de los productos | Codesa"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="post-info">
        <h1 className="post-info__title">{postInfo.title}</h1>
        <div className="post-info__creation-date">
          {moment(postInfo.date).local("es").format("LL")}
        </div>
        <div
          className="post-info__description"
          dangerouslySetInnerHTML={{ __html: postInfo.description }}
        ></div>
      </div>
    </>
  );
}
