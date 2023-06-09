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
import { BsCardImage} from "react-icons/bs";
import {FaFileCsv} from 'react-icons/fa'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {MdOutlineDriveFolderUpload} from 'react-icons/md'

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
import UploadFileCsv from 'views/admin/UploadFileCSV'
import InformacionGeneral from 'views/admin/FormPr13'

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Lista de usuarios",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={HiUsers} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Registro nuevo usuario",
    layout: "/admin",
    path: "/registro-nuevo-usuario",
    icon: <Icon as={MdUpload} width="20px" height="20px" color="inherit" />,
    component: DataTables,
  },
  {
    name: "Agregar por carpeta",
    layout: "/admin",
    path: "/registro-file-csv",
    icon: <Icon as={MdOutlineDriveFolderUpload} width="20px" height="20px" color="inherit" />,
    component: UploadFileCsv,
  },
  {
    name: 'Informacion General',
    layout:'/admin',
    path: '/registro-informacion-general',
    icon: <Icon as={MdOutlineDriveFolderUpload} width="20px" height="20px" color="inherit" />,
    component: InformacionGeneral
  },
  // {
  //   name: "Video Stream",
  //   layout: "/admin",
  //   icon: (
  //     <Icon
  //       as={MdVideoCameraFront}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   path: "/video-stream",
  //   component: VideoStream,
  // },
  {
    name: "Comparar imagenes",
    layout: "/admin",
    path: "/comparar-images",
    icon: <Icon as={BsCardImage} width="20px" height="20px" color="inherit" />,
    component: CompareImage,
  },
  {
    name: "Busqueda por imagen",
    layout: "/admin",
    path: "/search-by-images",
    icon: (
      <Icon as={MdImageSearch} width="20px" height="20px" color="inherit" />
    ),
    component: SearchByImage,
  },
  {
    name: "Resgistro usuario",
    layout: "/admin",
    path: "/registro-userios",
    icon: <Icon as={FaUserPlus} width="20px" height="20px" color="inherit" />,
    component: RegistroUsers,
  },
  {
    name: "Iniciar session",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile-test",
    icon: (
      <Icon as={MdImageSearch} width="20px" height="20px" color="inherit" />
    ),
    component: Profile,
  },
];

export default routes;
