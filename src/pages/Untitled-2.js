const [selectedUser, setSelectedUser] = useState(null);

const handleSave = () => {
  const updatedUsers = users?.map((user) =>
    user?.id === selectedUser?.id ? selectedUser : user
  );
  setUsers(updatedUsers);
  setOpen(false);
};

localStorage.setItem("dataSource", JSON.stringify(dataArr));
<Table
  id="user-table"
  name=""
  className="overflow-x-scroll no-scrollbar bg-white  rounded-lg my-5"
  columns={columns}
  dataSource={dataSource}
  pagination={{
    pageSize: 10,
    // total: TotalPages,
  }}
></Table>;
how to data edit in localStorage
