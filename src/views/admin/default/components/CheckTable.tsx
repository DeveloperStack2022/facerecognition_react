import {
  Flex,
  Table,
  Button,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Link as RouterLink } from "react-router-dom";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
export default function CheckTable(props: {
  columnsData: any;
  tableData: any;
}) {
  const { columnsData, tableData } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const backgroundButton = useColorModeValue("brand.500", "white");
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Check Users
        </Text>
        <Menu />
      </Flex>
      <Table>
        <Thead>
          <Tr>
            <Th pe="10px">Nombre</Th>
            <Th pe="10px">Apellido</Th>
            <Th pe="10px">Numero Cedula</Th>
            <Th pe="10px">Imagenes</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((item: any) => (
            <Tr>
              <Td>{item.nombres}</Td>
              <Td>{item.apellidos}</Td>
              <Td>{item.numero_cedula}</Td>
              <Td>
                <RouterLink to={`/user/default/${item.numero_cedula}`}>
                  <Button
                    variant="action"
                    p="0px !important"
                    borderRadius="50%"
                    minW="36px"
                    h="36px"
                  >
                    {item.images_id.length}
                  </Button>
                </RouterLink>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
}
