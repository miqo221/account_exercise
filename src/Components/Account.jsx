import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./my-style.module.css";

export default function Account() {
  const { id } = useParams();

  return (
    <div>
      <table className={styles.secondPage}>
        <tr>
          <th className={styles.secondPage}>ID</th>
          <td className={styles.secondPage}>{id}</td>
        </tr>
        <tr>
          <th className={styles.secondPage}>Name</th>
          <td className={styles.secondPage}>Account {id}</td>
        </tr>
        <tr>
          <th className={styles.secondPage}>Owner</th>
          <td className={styles.secondPage}>User {id}</td>
        </tr>
        <tr>
          <th className={styles.secondPage}>Created On</th>
          <td className={styles.secondPage}>5-8-2021</td>
        </tr>
        <tr>
          <th className={styles.secondPage}>Updated On</th>
          <td className={styles.secondPage}>5-8-2021</td>
        </tr>
      </table>
      <button className={styles.buttonMain}>
        <Link to="/">Main List</Link>
      </button>
    </div>
  );
}
