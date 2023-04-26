import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { UserResume } from "./components/UserResume";
import axios from "axios";

interface User {
  atended: boolean;
  cell: string;
  deleted: boolean;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    street: string;
    city: string;
    country: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [fixedUsers, setFixedUsers] = useState<User[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=15");

    const updatedData = data.results.map((user: User) => ({
      ...user,
      atended: Math.random() >= 0.5,
      deleted: Math.random() >= 0.5,
    }));
    setUsers(updatedData);
    setFixedUsers(updatedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function changeUser(filter: string) {
    if (filter === "atended") {
      const filteredUsers = fixedUsers.filter((user) => user.atended);
      setUsers(filteredUsers);
    } else if (filter == "deleted") {
      const deletedUsers = fixedUsers.filter((user) => user.deleted);
      setUsers(deletedUsers);
    } else if (filter == "all") {
      setUsers(fixedUsers);
    } else {
      const filteredUsersbyName = fixedUsers.filter((user) =>
        user.name.first.toLowerCase().includes(filter.toLowerCase())
      );
      setUsers(filteredUsersbyName);
    }
    return {};
  }

  return (
    <>
      <Navbar changeUsers={changeUser} />
      <div className="main">
        <Sidebar users={users} changeUsers={changeUser} />
        <div className="mainSection">
          <UserResume users={users} />
        </div>
      </div>
    </>
  );
}

export default App;
