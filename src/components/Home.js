import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  const users = useOutletContext(); // get users from parent (App)
  const userList = users?.map(user => <UserCard key={user.id} user={user} />);

  return (
    <main>
      <h1>Home!</h1>
      <Outlet context={users} /> {/* pass users to nested routes */}
      {userList}
    </main>
  );
}

export default Home;
