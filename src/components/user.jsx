import React from "react";
import Quaility from "./quality";
import Bookmark from "./bookmark";
const User = (props) => {
  const handleFavorite = (index) => {
    if (Boolean(props.users[index].isFavorite)) {
      return;
    } else return;
  };
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
  const renderUser = () => {
    return (
      props.users.length !== 0 &&
      props.users.map((user, userIndex) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            <Quaility qualities={user.qualities} />
          </td>
          <td key={user.profession._id}>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td>
            <Bookmark
              isFavorite={props.users.isFavorite}
              onFavorite={() => props.onFavorite(userIndex)}
            ></Bookmark>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.onDelete(user._id)}
            >
              delete
            </button>
          </td>
        </tr>
      ))
    );
  };
  return (
    <table className="table">
      <thead>{renderHeader()}</thead>
      <tbody>{renderUser()}</tbody>
    </table>
  );
};

export default User;
