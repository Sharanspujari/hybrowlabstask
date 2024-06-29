import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Implement the following:
// On clicking Add record call the following REST API and add the record in the table.
// Your task is to make a clickable button “Add Record” which on click will add a random user in the table from the https://swapi.dev/api/people/{random number} API which will return information of the random user (open to check) also implement the “Delete” button to delete record from the table. Display in the format as mentioned below in the picture. You don’t have to style it properly, basic CSS will work. Just focus on functionality.
// Note: You cannot use extra dependencies/packages except Axios.
// curl --location --request GET 'https://swapi.dev/api/people/{random number}' \
// --header 'Accept: application/json'

function App() {
  const [addRecord, setAddRecord] = useState(null);
  console.log("addRecord: ", addRecord);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`https://swapi.dev/api/people`);
        const data = await resp.json();
        if (addRecord) {
          setUsers((prev) => [...prev, data.results[addRecord]]);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };

    if (addRecord >= 0) {
      fetchData();
    }
  }, [addRecord]);

  const addRandomUser = () => {
    setAddRecord((prev) => prev + 1);
  };

  // this function is to delete user
  const deleteUser = (user) => {
    console.log(user.name);
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
