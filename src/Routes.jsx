import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LoggedInUserScrolledFollowGroupsClicked = React.lazy(
  () => import("pages/LoggedInUserScrolledFollowGroupsClicked"),
);
const LoggedInUserScrolledLocationEditEnabled = React.lazy(
  () => import("pages/LoggedInUserScrolledLocationEditEnabled"),
);
const NotLoggedInDesktop = React.lazy(() => import("pages/NotLoggedInDesktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/notloggedindesktop" element={<NotLoggedInDesktop />} />
          <Route
            path="/loggedinuserscrolledlocationeditenabled"
            element={<LoggedInUserScrolledLocationEditEnabled />}
          />
          <Route
            path="/loggedinuserscrolledfollowgroupsclicked"
            element={<LoggedInUserScrolledFollowGroupsClicked />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
