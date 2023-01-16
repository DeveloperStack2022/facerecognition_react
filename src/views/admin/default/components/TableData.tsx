import { FC } from "react";
import {
  Text,
  Grid,
  GridItem,
  Img,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TableContainer,
  Stack,
  useColorModeValue,
  Box,
  Avatar,
} from "@chakra-ui/react";
//Types Props,

// Redux
import { useAppDispatch, useAppSelector } from "hooks/redux/hook";
//Custom Components
import Card from "components/card/Card";

const TableDataInformationUser = () => {
  // const { cedula, nombres, ...rest } = props;
  //Redux Hooks
  let userPersistencia = useAppSelector((state) => state.user_persistencia);
  //Color mode value
  // const textBackground = useColorModeValue("#7479fd", "#7479fd");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", " gray.400");
  return (
    <>
      <Card display={"flex"} border="2px" borderColor={"gray.500"}>
        <Stack
          direction={{ base: "column", sm: "column", lg: "column" }}
          justifyContent={{ sm: "center" }}
        >
          <Text fontSize="2xl" fontWeight={"700"} mb="2" color={textColor}>
            Informacion
          </Text>
          <Box w="100%" display={"flex"}>
            {userPersistencia.user_persistencia.image_base64[0].image_base64 ==
            "" ? (
              <Avatar borderRadius={"none"} w="250px" h="250px" bg="gray.300" />
            ) : (
              <Img
                src={`data:image/png;base64,${userPersistencia.user_persistencia.image_base64[0].image_base64}`}
                width="250px"
                height={"250px"}
              />
            )}

            <Table size="sm" variant="myTable">
              <Tbody>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"normal"}
                      fontWeight={"700"}
                    >
                      Nombres:
                    </Text>
                    <Text ml="1" as={"span"} textTransform={"uppercase"}>
                      {userPersistencia.user_persistencia.nombres}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"normal"}
                      fontWeight={"700"}
                    >
                      Cedula:
                    </Text>
                    <Text ml="1" as={"span"}>
                      {userPersistencia.user_persistencia.numero_cedula}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"normal"}
                      fontWeight={"700"}
                    >
                      Condicion cedulado:{" "}
                    </Text>
                    <Text ml="1" as={"span"} textTransform={"uppercase"}>
                      {userPersistencia.user_persistencia.condicion_cedulado}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"normal"}
                      fontWeight={"700"}
                    >
                      Fecha nacimiento:{" "}
                    </Text>{" "}
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Lugar ins nacimiento:{" "}
                    </Text>
                    <Text ml="1" as={"span"} textTransform={"uppercase"}>
                      {" "}
                      {userPersistencia.user_persistencia.lugar_ins_nacimiento}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight={"700"}
                    >
                      Año ins nacimiento:{" "}
                    </Text>
                    <Text as={"span"}>
                      {" "}
                      {userPersistencia.user_persistencia.anio_ins_nacimiento}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight={"700"}
                    >
                      Nacionalidad:{" "}
                    </Text>
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {userPersistencia.user_persistencia.nacionalidad}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Codigo dactilar:{" "}
                    </Text>
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {userPersistencia.user_persistencia.codigo_dactilar}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Estado civil:{" "}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {userPersistencia.user_persistencia.estado_civil}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Conyugue:
                    </Text>
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {userPersistencia.user_persistencia.conyuge}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Instruccion:{" "}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {userPersistencia.user_persistencia.instruccion}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Profesion:
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {userPersistencia.user_persistencia.profession}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Nombre padre:{" "}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {" "}
                      {userPersistencia.user_persistencia.nombre_padre}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Nacionalidad padre:{" "}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {" "}
                      {userPersistencia.user_persistencia.nacionalidad_padre}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Nombre madre:{" "}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {" "}
                      {userPersistencia.user_persistencia.nombre_madre}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Nacionalidad madre:{" "}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {" "}
                      {userPersistencia.user_persistencia.nacionalidad_madre}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Domicilio:
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {userPersistencia.user_persistencia.domicilio}
                    </Text>
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Calles domicilio:{" "}
                      {userPersistencia.user_persistencia.calles_domicilio}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase"></Text>
                  </Td>
                  <Td>
                    <Text
                      textTransform={"uppercase"}
                      as="span"
                      letterSpacing={"-0.48px"}
                      fontWeight="700"
                    >
                      Doble nacionalidad:{" "}
                    </Text>{" "}
                    <Text ml="1" as={"span"} textTransform="uppercase">
                      {" "}
                      {userPersistencia.user_persistencia.doble_nacionalidad}
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default TableDataInformationUser;

//  <Grid
//    templateColumns={"220px 260px 1fr 1fr"}
//    templateAreas={`
//       "Image  nombres  cedula condicion_cedulado"
//       "Image  fecha_naciomiento  lugar_nacimiento anio_ins_nacimiento"
//       "Image nacionalidad  codigo_dactilar estado_civil"
//       "Image conyugue  instruccion profesion"
//       "Image nombre_padre  nacionalidad_padre  nombre_madre"
//       "Image  nacionalidad_madre  domicilio  calles_domicilio"
//       "Image  doble_nacionalidad  button  null"

//       `}
//    gap="2"
//  >
//    <GridItem area={"Image"}>
//      <Img
//        objectFit={"contain"}
//        src={`data:image/png;base64,${userPersistencia.user_persistencia.image_base64[0].image_base64}`}
//        width="100%"
//        h={"100%"}
//      />
//    </GridItem>
//    <GridItem area={"nombres"} borderColor="gray.300">
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Nombres:{" "}
//      </Text>
//      {userPersistencia.user_persistencia.nombres}
//    </GridItem>
//    <GridItem area={"cedula"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Cedula:
//      </Text>
//      {userPersistencia.user_persistencia.numero_cedula}
//    </GridItem>
//    <GridItem area={"condicion_cedulado"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Condiccion cedulado:{" "}
//      </Text>
//      {userPersistencia.user_persistencia.condicion_cedulado}
//    </GridItem>
//    <GridItem area={"fecha_naciomiento"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        fecha nacimiento:{" "}
//      </Text>
//    </GridItem>
//    <GridItem area={"lugar_nacimiento"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        lugar ins nacimiento:{" "}
//      </Text>
//      {userPersistencia.user_persistencia.lugar_ins_nacimiento}
//    </GridItem>
//    <GridItem area={"anio_ins_nacimiento"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Año ins nacimiento:{" "}
//      </Text>
//      {userPersistencia.user_persistencia.anio_ins_nacimiento}
//    </GridItem>
//    <GridItem area={"nacionalidad"}>
//      <Text letterSpacing={"normal"} as={"span"} textTransform={"uppercase"}>
//        Nacionalidad:
//      </Text>
//      {userPersistencia.user_persistencia.nacionalidad}
//    </GridItem>
//    <GridItem area={"codigo_dactilar"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Codigo dactilar:
//      </Text>
//      {userPersistencia.user_persistencia.codigo_dactilar}
//    </GridItem>
//    <GridItem area={"estado_civil"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Estado civil:
//      </Text>
//      {userPersistencia.user_persistencia.estado_civil}
//    </GridItem>
//    <GridItem area={"conyugue"}>
//      <Text letterSpacing={"normal"} as={"span"} textTransform={"uppercase"}>
//        Conyuge:
//      </Text>
//      {userPersistencia.user_persistencia.conyuge}
//    </GridItem>
//    <GridItem area={"instruccion"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        instruccion:
//      </Text>
//      {userPersistencia.user_persistencia.instruccion}
//    </GridItem>
//    <GridItem area={"profesion"}>
//      <Text letterSpacing={"normal"} as={"span"} textTransform={"uppercase"}>
//        profesion:
//      </Text>
//      {userPersistencia.user_persistencia.profession}
//    </GridItem>
//    <GridItem area={"nombre_padre"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        nombre padre:
//      </Text>
//      {userPersistencia.user_persistencia.nombre_padre}
//    </GridItem>
//    <GridItem area={"nacionalidad_padre"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Nacionalidad padre:
//      </Text>
//      {userPersistencia.user_persistencia.nacionalidad_padre}
//    </GridItem>
//    <GridItem area={"nombre_madre"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Nombre madre:
//      </Text>
//      {userPersistencia.user_persistencia.nombre_madre}
//    </GridItem>
//    <GridItem area={"nacionalidad_madre"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Nacionalidad madre:
//      </Text>
//      {userPersistencia.user_persistencia.nacionalidad_madre}
//    </GridItem>
//    <GridItem area={"domicilio"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Domicilio:
//      </Text>
//      {userPersistencia.user_persistencia.domicilio}
//    </GridItem>
//    <GridItem area={"calles_domicilio"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Calles domicilio:
//      </Text>
//      {userPersistencia.user_persistencia.calles_domicilio}
//    </GridItem>
//    <GridItem area={"doble_nacionalidad"}>
//      <Text
//        mr="1"
//        letterSpacing={"normal"}
//        as={"span"}
//        textTransform={"uppercase"}
//      >
//        Doble nacionalidad:
//      </Text>
//      {userPersistencia.user_persistencia.doble_nacionalidad}
//    </GridItem>
//  </Grid>;
