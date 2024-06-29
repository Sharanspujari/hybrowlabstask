import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [addRecord, setAddRecord] = useState(null);
  console.log("addRecord: ", addRecord);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`https://swapi.dev/api/people/${addRecord}`);
        const data = await resp.json();

        if (addRecord) {
          setUsers((prev) => [...prev, data]);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };

    if (addRecord >= 0) {
      fetchData();
    }
  }, [addRecord]);

  // function  to get random number.
  const addRandomUser = () => {
    setAddRecord(Math.floor(Math.random() * 10) + 1);
  };

  // this function is to delete user
  const deleteUser = (user) => {
    const filtered = users.filter((userL, i) => userL.name !== user.name);
    setUsers(filtered);
  };

  return (
    <div className="App">
      <button onClick={addRandomUser}>Add Record</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.length >= 0 &&
            users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteUser(user)}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
