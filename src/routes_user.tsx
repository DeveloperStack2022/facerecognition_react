import { Icon } from "@chakra-ui/react";
import { HiUsers } from "react-icons/hi";

// User Imports
import Default from "views/users/default";
import UserVideoStream from "views/users/VideoStream";

const routes = [
  {
    name: "View information user",
    layout: "/user",
    path: "/default/:id",
    icon: <Icon as={HiUsers} width="20px" height="20px" color="inherit" />,
    component: Default,
  },
  {
    name: "Video Stream and face recognetion",
    layout: "/user",
    path: "/videoStream",
    icon: <Icon as={HiUsers} width="20px" height="20px" color="inherit" />,
    component: UserVideoStream,
  },
];

export default routes;
