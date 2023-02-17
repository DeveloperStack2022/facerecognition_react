import { useEffect,useCallback,useRef,useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux/hook";
//Redux Slice
import { getProducts,getUserPage } from "../../../features/user/userSlice";
// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

//Custom components
import { columnsDataCheck } from "views/admin/default/variables/columnsData";
import CheckTable from "views/admin/default/components/CheckTable";
// import TableUsers from "views/admin/default/components/TableUsers";
import TableData from "views/admin/default/components/TableData";


export default function UserReports() {
  const fetchIdRef = useRef(0)
  const dispatch = useAppDispatch();
  const { users, isLoading,pageCount } = useAppSelector((state) => state.users);
  const [Loading, setLoading] = useState<boolean>(false)
  const [Data, setData] = useState([])
  const [PageCount, setPageCount] = useState<number>(0)
  const [Search, setSearch] = useState("")


  const fetchAPIData = async (skip:number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/api/v0.1/userpersistencia/get_users?n_page=${skip}`);
      const data = await response.json();
      setData(data.payload);
      setPageCount(data.total_pages);
      setLoading(false);
    } catch (e) {
      console.log("Error while fetching", e);
      // setLoading(false)
    }
  };

  useEffect(() => {
    
    // console.log(di.session.verifyToken());
    if (users.length === 0) {
      dispatch(getUserPage(1));
    }
    return () => {};
  }, [users, dispatch]);


  const fetchData = useCallback((n_page:number) => {
    // const fetchId = ++fetchIdRef.current;
    // if(fetchId == fetchIdRef.current){
      
    // }
    fetchAPIData(n_page)
  },[Search])

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
          <CheckTable columnsData={columnsDataCheck} tableData={Data} fetchData={fetchData} PageCount={pageCount} loading={Loading}  />
        <TableData />
      </SimpleGrid>
    </Box>
  );
}
