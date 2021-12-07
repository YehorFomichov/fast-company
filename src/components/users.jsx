import React from "react";
import User from "./user";

const Users = (props) => {
  const renderHeader = () => {
    return (
      props.users.length !== 0 && (
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
    <table className="table">
      <thead>{renderHeader()}</thead>
      <tbody>
        <User
          users={props.users}
          onDelete={props.onDelete}
          onFavorite={props.onFavorite}
        />
      </tbody>
    </table>
  );
};

export default Users;
