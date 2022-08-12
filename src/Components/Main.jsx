import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const array = [
    {
      id: "1",
      name: "Account 1",
      createdOn: "5-8-2021",
      owner: "User 1",
    },
    {
      id: "2",
      name: "Account 2",
      createdOn: "5-8-2021",
      owner: "User 2",
    },
    {
      id: "3",
      name: "Account 3",
      createdOn: "5-8-2021",
      owner: "User 3",
    },
  ];
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Created On</th>
        <th>Owner</th>
        <th>Action</th>
      </tr>

      {array.map((el) => {
        return (
          <tr>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.createdOn}</td>
            <td>{el.owner}</td>
            <td>
              <Link to={`/Account/${el.id}`}>View</Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Main;
