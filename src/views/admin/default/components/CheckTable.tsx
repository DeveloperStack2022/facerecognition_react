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
  Box,
  IconButton,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  SortingState,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Link as RouterLink } from "react-router-dom";
//React Icons
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRegTrashAlt,
} from "react-icons/fa";
// Custom components
import Card from "components/card/Card";

//Store Slice  - Redux
import { getUserPersisitencia } from "features/user_persistencia/user_persistenciaSlice";
import {
  change_user_detail,
  clear,
} from "features/user_persistencia/user_persistenciaSlice";
import {
  delete_user,
  delteUserPersistenciaAsyncThunk,
} from "features/user/userSlice";

//Custom Hooks
import { useAppDispatch, useAppSelector } from "hooks/redux/hook";
import Swal from "sweetalert2";

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
  //Redux
  const dispatch = useAppDispatch();
  const stateStatusUserPersistenciaR = useAppSelector(
    (state) => state.user_persistencia
  );
  const userDataR = useAppSelector((state) => state.users.users);
  const { columnsData, tableData } = props;
  const [Sorting, setSorting] = useState<SortingState>([]);
  //Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  // const iconButtonColor = useColorModeValue("")
  let defaultData = tableData;
  const [Data, setData] = useState(() => [...defaultData]);

  const handleClickDataInformation = (numero_cedula: string) => {
    let result_ = stateStatusUserPersistenciaR.user_array.filter(
      (elem) => elem.numero_cedula === numero_cedula
    )[0];
    if (!result_) {
      dispatch(getUserPersisitencia(numero_cedula));
      return;
    }
    dispatch(change_user_detail({ numero_cedula }));
  };

  const handleDelete = (numero_cedula: string) => {
    Swal.fire({
      title: "Question",
      text: `Estas seguro que deseas eliminar este usuario.`,
      showCancelButton: true,
      cancelButtonText: "NO",
      cancelButtonColor: "#e53e3e",
      showConfirmButton: true,
      confirmButtonText: "SI",
      confirmButtonColor: "#422AFB",
      icon: "question",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delteUserPersistenciaAsyncThunk(numero_cedula));
        dispatch(delete_user({ numero_cedula }));
        dispatch(clear());
        setData((data) =>
          data.filter((e) => e.numero_cedula !== numero_cedula)
        );

        Swal.fire("Eliminado", "", "success");
      }
    });
  };

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
          fontSize={{ sm: "md", lg: "md", base: "md" }}
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
          <Flex
            justifyContent={"space-around"}
            maxW={{ base: "150px", lg: "100%" }}
            flexDirection={{ base: "row", sm: "column", lg: "row" }}
            rowGap={{ base: "", sm: "1" }}
          >
            <Tooltip label="Ver detalles">
              <IconButton
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                variant="action"
                aria-label="Generate_"
                icon={<HiOutlineDocumentText />}
                p="0px !important"
                borderRadius="50%"
                fontSize={{ lg: "lg", base: "lg", sm: "md" }}
                w="36px"
                h="36px"
                onClick={() =>
                  handleClickDataInformation(info.row.original.numero_cedula)
                }
              />
            </Tooltip>
            <Tooltip label="Delete user">
              <IconButton
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                variant="action"
                aria-label="Generate_"
                icon={<FaRegTrashAlt />}
                p="0px !important"
                borderRadius="50%"
                fontSize={{ lg: "lg", base: "lg", sm: "md" }}
                w="36px"
                h="36px"
                onClick={() => handleDelete(info.row.original.numero_cedula)}
              />
            </Tooltip>
            <RouterLink to={`/user/default/${info.row.original.numero_cedula}`}>
              <Tooltip label="Ver imagen">
                <Button
                  variant="action"
                  p="0px !important"
                  borderRadius="50%"
                  minW="36px"
                  h="36px"
                >
                  {info.getValue().length}
                </Button>
              </Tooltip>
            </RouterLink>
          </Flex>
        </>
      ),
    }),
  ];

  const table = useReactTable({
    data: Data,
    columns: Columns,
    state: { sorting: Sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: false,
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
            .rows.slice(0, 10)
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
      <Box display="flex" columnGap={"2"} ps="25px">
        <Button
          variant="action"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <Icon as={FaAngleDoubleLeft} />
        </Button>
        <Button
          variant="action"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <Icon as={IoIosArrowBack} />
        </Button>
        <Button
          variant="action"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <Icon as={IoIosArrowForward} />
        </Button>
        <Button
          variant="action"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <Icon as={FaAngleDoubleRight} />
        </Button>
        {/* {JSON.stringify(table.getState())} */}
      </Box>
    </Card>
  );
}
