import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux/hook";
//Redux Slice
import { getProducts } from "../../../features/user/userSlice";
// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import CheckTable from "views/admin/default/components/CheckTable";
import { columnsDataCheck } from "views/admin/default/variables/columnsData";
//
import di from "di";

export default function UserReports() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  useEffect(() => {
    // console.log(di.session.verifyToken());
    if (users.length == 0) {
      dispatch(getProducts());
    }
    return () => {};
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <CheckTable columnsData={columnsDataCheck} tableData={users} />
      </SimpleGrid>
    </Box>
  );
}
