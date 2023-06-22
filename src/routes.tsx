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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 24" fill="none">
            <path d="M13.4166 2H5.74998C5.24165 2 4.75414 2.21071 4.39469 2.58579C4.03525 2.96086 3.83331 3.46957 3.83331 4V20C3.83331 20.5304 4.03525 21.0391 4.39469 21.4142C4.75414 21.7893 5.24165 22 5.74998 22H17.25C17.7583 22 18.2458 21.7893 18.6053 21.4142C18.9647 21.0391 19.1666 20.5304 19.1666 20V8L13.4166 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.6667 17V16C15.6667 15.4696 15.4647 14.9609 15.1053 14.5858C14.7458 14.2107 14.2583 14 13.75 14H9.91667C9.40834 14 8.92082 14.2107 8.56138 14.5858C8.20193 14.9609 8 15.4696 8 16V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8333 12C12.8918 12 13.75 11.1046 13.75 10C13.75 8.89543 12.8918 8 11.8333 8C10.7747 8 9.91663 8.89543 9.91663 10C9.91663 11.1046 10.7747 12 11.8333 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
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
