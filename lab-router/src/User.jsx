import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./App";

function User() {
  const users = useContext(UserContext);
  const { id } = useParams();
  return <h1>User: {users[id-1].name}</h1>;
}

export default User;