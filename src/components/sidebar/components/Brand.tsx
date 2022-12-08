// Chakra imports
import { Flex, useColorModeValue, Text } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Text my="20px" fontSize={"3xl"} fontWeight={"bold"} color={logoColor}>
        Web Open Cv
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
