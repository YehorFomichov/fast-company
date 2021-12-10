import React, { useState } from "react";
import { Pagination } from "./pagination";
import User from "./user";
import paginate from "../utils/paginate";

const Users = ({ users, ...props }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);
  const renderHeader = () => {
    return (
      users.length !== 0 && (
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Избранное</th>
        </tr>
      )
    );
  };
  return (
    <>
      <table className="table">
        <thead>{renderHeader()}</thead>
        <tbody>
          {users.length !== 0 &&
            userCrop.map((user) => (
              <User
                user={user}
                onFavorite={props.onFavorite}
                onDelete={props.onDelete}
                key={user._id}
              />
            ))}
          {/* // <User
          //   users={users}
          //   onDelete={props.onDelete}
          //   onFavorite={props.onFavorite}
          // /> */}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
