import React from "react";
import Quaility from "./quality";
import Bookmark from "./bookmark";
const User = (props) => {
  console.log(props);
  const l1 =
    "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z";
  const l2 =
    "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z";
  return (
    props.users.length !== 0 &&
    props.users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          <Quaility qualities={user.qualities} />
        </td>
        <td key={user.profession._id}>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button onClick={() => props.onFavorite(user._id)}>
            {user.bookmark ? <Bookmark link={l1} /> : <Bookmark link={l2} />}
          </button>
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

export default User;
