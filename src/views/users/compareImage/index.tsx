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
export default function CompareImage() {
  //
  // const { isOpen, onOpen, onClose } = useDisclosure();
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

    compareImage(formData)
      .then((res) => {
        setImageServer(res?.detect.url);
        setMatch(res?.detect.match.toFixed(2));
        setData(res?.detect);
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };
  const onClose = () => {
    deleteImage()
      .then((res) => {})
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
      />
      <Modal isOpen={OpenModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Img src={ImageServer} width="100%" height="100%" />
            <Box display="flex" mt="4">
              <SimpleGrid columns={2} spacingX="4">
                <Text fontWeight={"medium"}>Match : </Text>{" "}
                <Text>{Match} %</Text>
                <Text fontWeight={"medium"}>N Puntos clave 1 : </Text>
                <Text>{Data.keypoints_1}</Text>
                <Text fontWeight={"medium"}>N Puntos clave 2 : </Text>
                <Text>{Data.keypoints_2}</Text>
                <Text fontWeight={"medium"}>Puntos coinciden : </Text>
                <Text>{Data.good_pointsKeys}</Text>
              </SimpleGrid>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
