import { ChangeEventHandler, useRef } from "react";
import {
  Box,
  Input,
  WrapItem,
  SimpleGrid,
  Button,
  Text,
  Icon,
  Flex,
  useColorModeValue,
  Img,
} from "@chakra-ui/react";
//
import Card from "components/card/Card";
//Icons
import { MdUpload } from "react-icons/md";

export default function FormImage(props: {
  onChangePicture: ChangeEventHandler<HTMLInputElement>;
  urlImage: string;
  urlImageCompare: string;
  onChangePictureCompare: ChangeEventHandler<HTMLInputElement>;
  label: string;
  onSubmit: () => void;
  loading: boolean;
}) {
  // Extract Props
  const {
    urlImage,
    onChangePicture,
    urlImageCompare,
    onChangePictureCompare,
    label,
    onSubmit,
    loading,
    ...rest
  } = props;
  //Colors Custom
  const brandColor = useColorModeValue("brand.500", "white");
  
  // React Hooks
  let hiddenInput = useRef<HTMLInputElement | null>(null);
  let hiddenInputCompare = useRef<HTMLInputElement>(null);

  // functions Events
  const handleClick = () => hiddenInput.current?.click();
  const handleClickCompare = () => hiddenInputCompare.current?.click();
  // Color Mode

  return (
    <Card>
      <SimpleGrid columns={{ sm: 1, base: 2, md: 2, xl: 2 }} gap="20px">
        <WrapItem width="472px" height={"400px"}>
          <Flex
            onClick={handleClick}
            w="100%"
            h="100%"
            objectFit={"cover"}
            _hover={{
              cursor: "pointer",
            }}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="center"
            borderRadius={"md"}
            border="1px"
            borderColor={"gray.200"}
          >
            {!urlImage ? (
              <>
                <Icon as={MdUpload} w="40px" h="40px" color={brandColor} />
                <Text fontSize="md" fontWeight="700" color={brandColor}>
                  Subir imagen a comparar
                </Text>
                <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                  PNG, JPG and JPEG solo este formato
                </Text>
              </>
            ) : (
              <Img src={urlImage} width="100%" height={"100%"} />
            )}
          </Flex>
          <Input
            hidden
            accept="image/png,image/jpeg"
            ref={(el) => {
              hiddenInput.current = el;
            }}
            type="file"
            onChange={onChangePicture}
          />
        </WrapItem>
        <WrapItem width="472px" height={"400px"}>
          <Flex
            onClick={handleClickCompare}
            w="100%"
            h="100%"
            objectFit={"cover"}
            _hover={{
              cursor: "pointer",
            }}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="center"
            borderRadius={"md"}
            border="1px"
            borderColor={"gray.200"}
          >
            {!urlImageCompare ? (
              <>
                <Icon as={MdUpload} w="40px" h="40px" color={brandColor} />
                <Text fontSize="md" fontWeight="700" color={brandColor}>
                  Subir imagen original
                </Text>
                <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                  PNG, JPG and JPEG solo este formato
                </Text>
              </>
            ) : (
              <Img src={urlImageCompare} width="100%" height={"100%"} />
            )}
          </Flex>
          <Input
            hidden
            accept="image/png,image/jpeg"
            ref={(el) => {
              hiddenInputCompare.current = el;
            }}
            type="file"
            onChange={onChangePictureCompare}
          />
        </WrapItem>
      </SimpleGrid>
      <Box display={"flex"} mt="4">
        <Button
          isLoading={loading}
          type="button"
          borderRadius={"md"}
          variant="brand"
          onClick={onSubmit}
          isDisabled={!urlImageCompare || !urlImageCompare ? true : false}
        >
          {label}
        </Button>
      </Box>
    </Card>
  );
}
