import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[100vh]">
      <h1 className="font-bold">Homepage</h1>
      <ul className="flex flex-col gap-3 text-blue-500 font-semibold">
        <li>
          <Link to="/notloggedindesktop">NotLoggedInDesktop</Link>
        </li>
        <li>
          <Link to="/loggedinuserscrolledlocationeditenabled">
            LoggedInUserScrolledLocationEditEnabled
          </Link>
        </li>
        <li>
          <Link to="/loggedinuserscrolledfollowgroupsclicked">
            LoggedInUserScrolledFollowGroupsClicked
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
