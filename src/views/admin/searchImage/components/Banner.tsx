import { useRef, useState } from "react";
import {
  useColorModeValue,
  Flex,
  Text,
  Icon,
  Input,
  Img,
  Button,
} from "@chakra-ui/react";
import { MdUpload } from "react-icons/md";
import Card from "components/card/Card";
import di from "di";

//Types
type dataServer = {
  apellidos: string;
  nombres: string;
  numero_cedula: string;
  valor_match: string;
};

export default function Banner(props: { titleBanner: string }) {
  const { titleBanner, ...rest } = props;
  //Sates
  const [picture, setPicture] = useState<any>(null);
  const [imgData, setImgData] = useState<any>(null);
  const [UploadImage, setUploadImage] = useState<boolean>(false);
  const [MessageServer, setMessageServer] = useState<dataServer>({
    apellidos: "",
    nombres: "",
    numero_cedula: "",
    valor_match: "",
  });
  const [Loading, setLoading] = useState<boolean>(false);
  //Refs
  let hiddenInput = useRef<HTMLInputElement | null>(null);
  const handleClick = () => hiddenInput.current?.click();

  // Chakra color mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";

  //
  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      setUploadImage(true);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image_compare", picture);
    setLoading(true);
    let response = await di.user.searchByImage(formData);
    if (response?.status >= 200 && response?.status < 300) {
      let data = await response?.json();
      data = data.payload;
      setLoading(false);
      setMessageServer({
        apellidos: data.apellidos,
        nombres: data.nombres,
        numero_cedula: data.numero_cedula,
        valor_match: data.valor_match,
      });
    }
  };
  return (
    <Card>
      <Flex
        mb="4"
        border="1px"
        borderColor={"gray.200"}
        direction="column"
        _hover={{ cursor: "pointer" }}
        alignItems="center"
        borderRadius={"md"}
        onClick={handleClick}
      >
        {!imgData ? (
          <>
            <Icon as={MdUpload} w="40px" h="40px" color={textColorPrimary} />
            <Flex justify="center" mx="auto" mb="12px">
              <Text fontSize="md" fontWeight="700" color={textColorPrimary}>
                Upload File
              </Text>
            </Flex>
            <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
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
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        textAlign="start"
        fontSize="2xl"
        mt={{ base: "20px", "2xl": "50px" }}
      >
        Informacion
      </Text>
      <Text
        color={textColorSecondary}
        fontSize="md"
        my={{ base: "auto", "2xl": "10px" }}
        textAlign="start"
      >
        Numero Cedula: {MessageServer.numero_cedula}
      </Text>
      <Text
        color={textColorSecondary}
        fontSize="md"
        my={{ base: "auto", "2xl": "10px" }}
        textAlign="start"
      >
        Nombres: {MessageServer.nombres}
      </Text>

      <Button
        fontSize="md"
        variant="brand"
        fontWeight="500"
        w="100%"
        h="50"
        type="submit"
        isDisabled={!UploadImage}
        mt="4"
        onClick={handleSubmit}
        isLoading={Loading}
      >
        Submit
      </Button>
    </Card>
  );
}
