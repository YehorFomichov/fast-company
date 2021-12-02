import react, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  console.log(users);
  const handleDelete = (userId) => {};
  const renderPhrase = (number) => {};
  const getQualityClass = (quality) => {
    let qualities = "badge bg-";
    qualities += quality;
    return qualities;
  };
  const renderQualities = (qualities) => {
    return qualities.map((quality) => (
      <span key={quality._id} className={getQualityClass(quality.color)}>
        {quality.name}{" "}
      </span>
    ));
  };
  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{renderQualities(user.qualities)}</td>
        <td key={user.profession._id}>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button type="button" className="btn btn-danger">
            delete
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  );
};

export default Users;
