import { FormEvent, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import di from "di";
// Chakra imports
import {
  Box,
  SimpleGrid,
  Flex,
  FormControl,
  FormLabel,
  useColorModeValue,
  Text,
  Input,
  Button,
  FormErrorMessage,
  Img,
  Icon,
} from "@chakra-ui/react";
import { MdUpload } from "react-icons/md";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

//custom components
import Card from "../../../components/card/Card";
import FormUploadUser from "./components/FormUploadUser";
//
type Inputs = {
  num_cedula: string;
  nombres: string;
  apellidos: string;
};

export default function Settings() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card>
        <FormUploadUser />
      </Card>
    </Box>
  );
}

/* <form onSubmit={submitForm}>
            <Flex
              direction="column"
              w={{ base: "100%", md: "auto" }}
              maxW="100%"
              background="transparent"
              borderRadius="15px"
              mx={{ base: "auto", lg: "unset" }}
              me="auto"
              mb={{ base: "20px", md: "auto" }}
            >
              <FormControl>
                <Flex justifyContent={"space-between"}>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Numero de cedula<Text color={brandStars}>*</Text>
                  </FormLabel>
                  {errors.num_cedula && (
                    <Text
                      aria-live="polite"
                      color="red.500"
                      fontSize="0.75rem"
                      mb={2}
                    >
                      {errors.num_cedula.message}
                    </Text>
                  )}
                </Flex>
                <Input
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="text"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  variant={"custom"}
                  {...register("num_cedula", {
                    required: "Campo requerido",
                    minLength: {
                      message: "EL numero de cedula le falta caracteres",
                      value: 10,
                    },
                    maxLength: {
                      message:
                        "El numero de cedula no tiene que ser mayor a 10 numeros",
                      value: 10,
                    },
                  })}
                  borderColor={errors.num_cedula && "#EF4444"}
                />
                <Flex justifyContent={"space-between"}>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Nombres completos<Text color={brandStars}>*</Text>
                  </FormLabel>
                  {errors.nombres && (
                    <Text
                      aria-live="polite"
                      color="red.500"
                      fontSize="0.75rem"
                      mb={2}
                    >
                      {errors.nombres.message}
                    </Text>
                  )}
                </Flex>
                <Input
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="text"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  variant={"custom"}
                  {...register("nombres", {
                    required: "Campo requerido",
                  })}
                  borderColor={errors.nombres && "#EF4444"}
                />
                <Flex justifyContent={"space-between"}>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Apellidos completos<Text color={brandStars}>*</Text>
                  </FormLabel>
                  {errors.apellidos && (
                    <Text
                      aria-live="polite"
                      color="red.500"
                      fontSize="0.75rem"
                      mb={2}
                    >
                      {errors.apellidos.message}
                    </Text>
                  )}
                </Flex>
                <Input
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="text"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  variant={"custom"}
                  {...register("apellidos", {
                    required: "Campo requerido",
                  })}
                  borderColor={errors.apellidos && "#EF4444"}
                />
                <FormErrorMessage>
                  {errors.apellidos && errors.apellidos.message}
                </FormErrorMessage>
                <Flex
                  mb="4"
                  onClick={handleClick}
                  border="1px"
                  borderColor={"gray.200"}
                  direction="column"
                  _hover={{ cursor: "pointer" }}
                  alignItems="center"
                  borderRadius={"md"}
                >
                  {!imgData ? (
                    <>
                      <Icon
                        as={MdUpload}
                        w="40px"
                        h="40px"
                        color={brandColor}
                      />
                      <Flex justify="center" mx="auto" mb="12px">
                        <Text fontSize="md" fontWeight="700" color={brandColor}>
                          Upload File
                        </Text>
                      </Flex>
                      <Text
                        fontSize="sm"
                        fontWeight="500"
                        color="secondaryGray.500"
                      >
                        PNG, JPG and JPEG files are allowed
                      </Text>
                    </>
                  ) : (
                    <Img src={imgData} width="100%" height={"100%"} />
                  )}
                </Flex>
                <Input
                  type="file"
                  hidden
                  accept="image/png,image/jpeg"
                  ref={(el) => {
                    hiddenInput.current = el;
                  }}
                  onChange={onChangePicture}
                />
                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  type="submit"
                  isDisabled={!UploadImage}
                >
                  Submit
                </Button>
              </FormControl>
            </Flex>
          </form> */
