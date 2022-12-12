import { ChangeEventHandler, useRef } from "react";
import { Box, Input, WrapItem, SimpleGrid, Button } from "@chakra-ui/react";
import Card from "components/card/Card";

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
          <Box
            backgroundColor={"gray.100"}
            as={"img"}
            onClick={handleClick}
            src={urlImage}
            w="100%"
            h="100%"
            objectFit={"cover"}
            _hover={{
              cursor: "pointer",
            }}
          ></Box>
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
          <Box
            backgroundColor={"gray.100"}
            as={"img"}
            onClick={handleClickCompare}
            src={urlImageCompare}
            w="100%"
            h="100%"
            objectFit={"cover"}
            _hover={{
              cursor: "pointer",
            }}
          ></Box>
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
          variant="darkBrand"
          onClick={onSubmit}
        >
          {label}
        </Button>
      </Box>
    </Card>
  );
}
