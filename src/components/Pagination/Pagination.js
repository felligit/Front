import React from "react";
import "./Pagination.scss";
import { Pagination as PaginationAntd } from "antd";

export default function Pagination(props) {
  const { posts, location, history } = props;
  const currentPage = parseInt(posts.page);
  console.log(currentPage);
  console.log(posts.limit);
  console.log(posts.total);
  let onChangePage = (newPage) => {
    history.push(`${location.pathname}?page=${newPage}`);
  };
  return (
    <PaginationAntd
      defaultCurrent={"currentPage"}
      total={"posts.total"}
      pagination={"true"}
      className="pagination"
      pageSize={"posts.limit"}
      onChange={(newPage) => onChangePage(newPage)}
    ></PaginationAntd>
  );
}
