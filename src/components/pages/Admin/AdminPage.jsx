import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import { getUsers, getVotes } from "../../../services/api";
import { useNavigation } from "../../../services/navigationContext";
import "./AdminPage.css";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [votes, setVotes] = useState([]);
  const { username } = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        const votesData = await getVotes();
        setUsers(usersData);
        setVotes(votesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="admin-page">
      <Navbar username={username} />
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Votes</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Candidate</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {votes.map((vote) => (
              <tr key={vote.id}>
                <td>{vote.id}</td>
                <td>{vote.userId}</td>
                <td>{vote.candidate}</td>
                <td>{vote.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
