import React, { useState } from "react";
import api from "../api";
import SearchStatus from "./searchStatus";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => userId !== user._id));
  };
  const handleFavorite = (elementId) => {
    const newState = users;
    if (newState[elementId].isFavorite === true) {
      newState[elementId].isFavorite = false;
    } else if (newState[elementId].isFavorite === false) {
      newState[elementId].isFavorite = true;
    } else newState[elementId].isFavorite = true;
    setUsers(newState);
    console.log(users);
  };
  return (
    <>
      <SearchStatus numberOfUsers={users.length} />
      <User
        users={users}
        onDelete={handleDelete}
        onFavorite={handleFavorite.bind(this)}
      />
    </>
  );
};

export default Users;
