import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux/hook";
//Redux Slice
import { getProducts } from "../../../features/user/userSlice";
// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

//Custom components
import { columnsDataCheck } from "views/admin/default/variables/columnsData";
import CheckTable from "views/admin/default/components/CheckTable";
import TableData from "views/admin/default/components/TableData";
export default function UserReports() {
  const dispatch = useAppDispatch();
  const { users, isLoading } = useAppSelector((state) => state.users);
  useEffect(() => {
    // console.log(di.session.verifyToken());
    if (users.length === 0) {
      dispatch(getProducts());
    }
    return () => {};
  }, [users, dispatch]);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        {!isLoading && (
          <CheckTable columnsData={columnsDataCheck} tableData={users} />
        )}
        <TableData />
      </SimpleGrid>
    </Box>
  );
}
