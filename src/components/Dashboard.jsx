import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import SuccesMsg from "./SuccesMsg";
import "../App.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Function to fetch users from Firestore
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(firestore, "users");
        const usersSnapshot = await getDocs(usersCollection);

        // Convert the snapshot to an array of user objects
        const userList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    // Call the fetchUsers function
    fetchUsers();
  }, []); // Run this effect only once, when the component mounts

  return (
    <div className="dashboardUi">
      <h2>User List</h2>
      <ul>
        <div>
          <strong>UUid:</strong>
          <strong>Email:</strong> <strong>Task:</strong>
        </div>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.id}</p> <p> {user.email}</p>
            <p> {user.task}</p>
          </li>
        ))}
      </ul>
      <SuccesMsg />
    </div>
  );
};
export default Dashboard;
