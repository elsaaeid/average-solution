import React from "react";
import UserStats from "../../../components/dashboard-components/userStates/UserStates";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import UsersList from "../../../components/dashboard-components/usersList";

const UserList = () => {
  useRedirectLoggedOutUser("/login");


  return (
    <section>
      <div className="container">
        <UserStats />
        <UsersList />
      </div>
    </section>
  );
};


export default UserList;
