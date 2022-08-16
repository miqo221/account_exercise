import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Table } from "antd";

const Main = () => {
  const { Column } = Table;
  const array = [
    {
      id: "1",
      name: "Account 1",
      createdOn: "5-8-2021",
      owner: "User 1",
      view: "View",
    },
    {
      id: "2",
      name: "Account 2",
      createdOn: "5-8-2021",
      owner: "User 2",
      view: "View",
    },
    {
      id: "3",
      name: "Account 3",
      createdOn: "5-8-2021",
      owner: "User 3",
      view: "View",
    },
  ];

  return (
    <Table dataSource={array}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Created On" dataIndex="createdOn" key="createdOn" />
      <Column title="Owner" dataIndex="owner" key="owner" />
      <Column
        title="Action"
        key="action"
        render={(index) => (
          <Link to={`Account/${index.id} `}>
            <a>View</a>
          </Link>
        )}
      />
    </Table>
  );
};

export default Main;
