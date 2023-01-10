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
import { useMemo, useState } from "react";
import {
  SortingState,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Link as RouterLink } from "react-router-dom";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

type RowObj = {
  nombres: string;
  numero_cedula: string;
  file: string;
};
const columnHelper = createColumnHelper<RowObj>();

//Component
export default function CheckTable(props: {
  columnsData: any;
  tableData: any;
}) {
  const { columnsData, tableData } = props;
  const [Sorting, setSorting] = useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");

  let defaultData = tableData;

  const Columns = [
    columnHelper.accessor("numero_cedula", {
      id: "cedula",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Cedula
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="normal">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor("nombres", {
      id: "nombres",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Nombres
        </Text>
      ),
      cell: (info) => (
        <Text
          color={textColor}
          letterSpacing={"normal"}
          fontWeight="normal"
          fontSize={{ sm: "12px", lg: "md", base: "md" }}
        >
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("file", {
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Imagenes
        </Text>
      ),
      cell: (info) => (
        <>
          <RouterLink to={`/user/default/${info.row.original.numero_cedula}`}>
            <Button
              variant="action"
              p="0px !important"
              borderRadius="50%"
              minW="36px"
              h="36px"
            >
              {info.getValue().length}
            </Button>
          </RouterLink>
        </>
      ),
    }),
  ];
  const [Data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data: Data,
    columns: Columns,
    state: { sorting: Sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
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
      <Table variant={"simple"} color="gray.500" mb="24px" mt="12px">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    pe={"10px"}
                    cursor={"pointer"}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Flex>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{ asc: "", desc: "" }[
                        header.column.getIsSorted() as string
                      ] ?? null}
                    </Flex>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table
            .getRowModel()
            .rows.slice(0, 11)
            .map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Card>
  );
}
