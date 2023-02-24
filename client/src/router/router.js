import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainHome from "../Components/MainHome/MainHome";
import Profile from "../Components/HeaderMenu/Profile/Profile";
import MyNetwork from "../Components/HeaderMenu/MyNetwork/MyNetwork";
import Jobs from "../Components/HeaderMenu/Jobs/Jobs";
import Message from "../Components/HeaderMenu/Message/Message";
import Notifications from "../Components/HeaderMenu/Notifications/Notifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "mynetwork",
        element: <MyNetwork />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "messaging",
        element: <Message />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);

export default router;
