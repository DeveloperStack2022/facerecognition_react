// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components

// Assets
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Upload(props: {
  used?: number;
  total?: number;
  [x: string]: any;
}) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  return (
    <Flex h="100px" direction={{ base: "column", "2xl": "row" }} mb="4">
      <Dropzone
        w={{ base: "100%", "2xl": "268px" }}
        me="36px"
        maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
        minH={{ base: "100%", lg: "100%", "2xl": "100%" }}
        content={
          <Box>
            <Icon as={MdUpload} w="40px" h="40px" color={brandColor} />
            <Flex justify="center" mx="auto" mb="12px">
              <Text fontSize="md" fontWeight="700" color={brandColor}>
                Upload File
              </Text>
            </Flex>
            <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
              PNG, JPG and JPEG files are allowed
            </Text>
          </Box>
        }
      />
    </Flex>
  );
}
