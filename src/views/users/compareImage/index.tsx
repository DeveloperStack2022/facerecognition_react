import { useState, ChangeEvent } from "react";
import {
  Box,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
// Services
import { compareImage, deleteImage } from "Services/user_detect";

// Custom components
import FormUploadImage from "./components/FormImage";
import { features } from "process";
export default function CompareImage() {
  //
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [Loading, setLoading] = useState<boolean>(false);
  const [Match, setMatch] = useState<number>(0);
  const [Data, setData] = useState<any>({});
  const [OpenModal, setOpen] = useState<boolean>(false);
  const [ImageServer, setImageServer] = useState<string>("");
  const [PictureChange, setPictureChange] = useState<any>();
  const [ImageData, setImageData] = useState<any>();
  const [PictureCompare, setPictureCompare] = useState<any>();
  const [ImageDataCompare, setImageDataCompare] = useState<any>();
  //

  const onChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setPictureChange(e.target.files![0]);
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
      });
      reader.readAsDataURL(e.target.files![0]);
    }
  };

  const onChangePictureCompare = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setPictureCompare(e.target.files![0]);
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageDataCompare(reader.result);
      });
      reader.readAsDataURL(e.target.files![0]);
    }
  };

  const handleCompare = () => {
    let formData = new FormData();

    formData.append("image_original", PictureChange);
    formData.append("image_compare", PictureCompare);
    setLoading(true);
    compareImage(formData)
      .then((res) => {
        setImageServer(res?.detect.url);
        setMatch(res?.detect.match.toFixed(2));
        setData(res?.detect);
        setOpen(true);
        // openWindows();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const openWindows = () => {
    let mywindow = window.open("", "MsgWindow", "width=200,height=100");
    mywindow.document.write(`<img src="${Data.url}"`);
  };

  const onClose = () => {
    deleteImage()
      .then((res) => {
        setImageServer("");
      })
      .catch((err) => console.log(err));
    setOpen(false);
  };
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <FormUploadImage
        onChangePictureCompare={onChangePictureCompare}
        urlImageCompare={ImageDataCompare}
        onChangePicture={onChangePicture}
        urlImage={ImageData}
        label="Comparar"
        onSubmit={handleCompare}
        loading={Loading}
      />
      <Modal isOpen={OpenModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comparacion facial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Img src={Data.url} width="100%" height="100%" />
            <Box display="flex" mt="4">
              <SimpleGrid columns={2} spacingX="4">
                <Text fontWeight={"medium"}>
                  Porcentaje de confiaza de similitud :{" "}
                </Text>{" "}
                <Text>{Match} %</Text>
                <Text fontWeight={"medium"}>Valor de verdad comparativo: </Text>
                <Text>{Data.compare}</Text>
              </SimpleGrid>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="darkBrand"
              mr={3}
              borderRadius={"md"}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
