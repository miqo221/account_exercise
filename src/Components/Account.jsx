import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./my-style.module.css";

export default function Account() {
  const { id } = useParams();
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <td>{id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Account {id}</td>
        </tr>
        <tr>
          <th>Owner</th>
          <td>User {id}</td>
        </tr>
        <tr>
          <th>Created On</th>
          <td>5-8-2021</td>
        </tr>
        <tr>
          <th>Updated On</th>
          <td>5-8-2021</td>
        </tr>
      </table>
      <button>
        <Link to="/">Main List</Link>
      </button>
    </div>
  );
}
