import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdLock,
  MdVideoCameraFront,
  MdUpload,
  MdImageSearch,
} from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa";
import { BsCardImage } from "react-icons/bs";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import RegistroUsers from "views/admin/RegistroUsers";
import SearchByImage from "views/admin/searchImage";

//UserImports
import VideoStream from "views/users/VideoStream";
import CompareImage from "views/users/compareImage";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "List Users",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={HiUsers} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Upload User",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: <Icon as={MdUpload} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    secondary: true,
  },
  {
    name: "Video Stream",
    layout: "/admin",
    icon: (
      <Icon
        as={MdVideoCameraFront}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    path: "/video-stream",
    component: VideoStream,
  },
  {
    name: "Comparar imagenes",
    layout: "/admin",
    path: "/comparar-images",
    icon: <Icon as={BsCardImage} width="20px" height="20px" color="inherit" />,
    component: CompareImage,
    secondary: true,
  },
  {
    name: "Registro users",
    layout: "/admin",
    path: "/registro-users",
    icon: <Icon as={FaUserPlus} width="20px" height="20px" color="inherit" />,
    component: RegistroUsers,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  {
    name: "Search By Image",
    layout: "/admin",
    path: "/search-by-images",
    icon: (
      <Icon as={MdImageSearch} width="20px" height="20px" color="inherit" />
    ),
    component: SearchByImage,
  },
];

export default routes;
