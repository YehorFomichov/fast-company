import React, { useState } from "react";
import api from "./api";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => userId !== user._id));
  };
  const toggleHandleBookmark = (userId) => {
    setUsers((prevState) =>
      prevState.forEach((user) => {
        if (user._id === userId) {
          user.bookmark === true
            ? (user.bookmark = false)
            : (user.bookmark = true);
        }
      })
    );
  };
  return (
    <>
      <SearchStatus numberOfUsers={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onFavorite={toggleHandleBookmark}
      />
    </>
  );
};
export default App;
