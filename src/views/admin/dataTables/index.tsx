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
} from "@chakra-ui/react";

//custom components
import Card from "../../../components/card/Card";
import Upload from "./components/Upload";

import React from "react";

export default function Settings() {
  // Chakra Color Mode
  const textColor = useColorModeValue("navy.700", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <Card>
          <Flex
            direction="column"
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: "auto", lg: "unset" }}
            me="auto"
            mb={{ base: "20px", md: "auto" }}
          >
            <FormControl>
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

              <Input
                isRequired={true}
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                mb="24px"
                fontWeight="500"
                size="lg"
              />

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
              <Input
                isRequired={true}
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                mb="24px"
                fontWeight="500"
                size="lg"
              />
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
              <Input
                isRequired={true}
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                mb="24px"
                fontWeight="500"
                size="lg"
              />
              <Upload
                gridArea={{
                  base: "3 / 1 / 4 / 2",
                  lg: "1 / 3 / 2 / 4",
                }}
                minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
                pe="20px"
                pb={{ base: "0", lg: "20px" }}
              />
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
              >
                Submit
              </Button>
            </FormControl>
          </Flex>
          {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        </Card>
      </SimpleGrid>
    </Box>
  );
}
