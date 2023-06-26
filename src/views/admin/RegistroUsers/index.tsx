import {
  Text,
  FormControl,
  FormLabel,
  useColorModeValue,
  Flex,
  Input,
  Button,
  RadioGroup,
  Stack,
  Radio,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
//custom components
import Card from "components/card/Card";
import { FormEvent, useState } from "react";
import { useForm, Controller } from "react-hook-form";
//
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
// Clean Arhcitecture
import di from "di";

type InputData = {
  email: string;
  username: string;
  rol: string;
  password: string;
};

export default function RegistroUsers() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<InputData>({ mode: "onBlur" });
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const borderCard = useColorModeValue(
    "secondaryGray.100",
    "rgba(135, 140, 189, 0.3)"
  );
  const bgText = useColorModeValue("secondaryGray.300", "navy.900");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const sendData = (e: FormEvent<HTMLInputElement>) => {
    handleSubmit(async (data) => {
      const user_register = {
        email: data?.email,
        password: data?.password,
        username: data?.username,
        rol: data?.rol,
      };
      await di.session.register(user_register);
    })(e);
  };

  return (
    <Flex
      position="relative"
      h={{
        sm: "initial",
        md: "unset",
        lg: "100vh",
        xl: "97vh",
      }}
      maxW={{ md: "66%", lg: "66%" }}
      pt={{ base: "130px", md: "80px", xl: "80px" }}
      w="100%"
      mx={{ base: "auto", lg: "0px" }}
      ps={{ xl: "70px" }}
      justifyContent="start"
      direction="column"
    >
      <FormControl as="form" onSubmit={sendData}>
        <Flex justify="space-between">
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Nombre Usuario<Text color={brandStars}>*</Text>
          </FormLabel>
          {errors.username && (
            <Text aria-live="polite" color="red.500" fontSize="0.75rem" mb={2}>
              {errors.username?.message}
            </Text>
          )}
        </Flex>
        <Input
          fontSize="sm"
          placeholder="Username"
          mb="24px"
          size="lg"
          type={"text"}
          variant="custom"
          borderColor={errors.username && "red.500"}
          {...register("username", {
            required: "Campo vacio",
          })}
        />
        <Flex justify="space-between">
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Email<Text color={brandStars}>*</Text>
          </FormLabel>
          {errors.email && (
            <Text aria-live="polite" color="red.500" fontSize="0.75rem" mb={2}>
              {errors.email?.message}
            </Text>
          )}
        </Flex>
        <Input
          fontSize="sm"
          placeholder="mail@simmmple.com"
          mb="24px"
          size="lg"
          type={"email"}
          
          borderColor={errors.email && "red.500"}
          {...register("email", {
            required: "Campo vacio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email incorrecto",
            },
          })}
        />
        <Flex justify="space-between">
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Password<Text color={brandStars}>*</Text>
          </FormLabel>
          {errors.password && (
            <Text aria-live="polite" color="red.500" fontSize="0.75rem" mb={2}>
              {errors.password?.message}
            </Text>
          )}
        </Flex>
        <InputGroup>
          <Input
            fontSize="sm"
            placeholder="Min 6 caracteres"
            mb="24px"
            size="lg"
            type={ show ? "text":"password"}
            variant="custom"
            borderColor={errors.password && "red.500"}
            {...register("password", {
              required: "Campo vacio",
              minLength: {
                message: "Minimo 6 caracteres",
                value: 6,
              },
            })}
          />
          <InputRightElement display="flex" alignItems="center" mt="4px">
            <Icon
              color={textColorSecondary}
              _hover={{ cursor: "pointer" }}
              as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <Card
          mb="24px"
          bg="transparent"
          borderColor={borderCard}
          borderWidth="2px"
          borderStyle={"solid"}
          borderRadius="md"
          position="relative"
        >
          <Text
            position="absolute"
            top="-12px"
            left="20px"
            color={textColor}
            fontWeight="500"
            fontSize={"md"}
            backgroundColor={bgText}
            width="140px"
            textAlign={"center"}
          >
            Selecciona el rol
          </Text>
          <Controller
            name="rol"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup onChange={onChange} value={value}>
                <Stack direction={"row"}>
                  <Radio colorScheme="brandScheme" me="10px" value="admin">
                    <Text color={textColor} fontSize="sm" fontWeight="500">
                      Administrador
                    </Text>
                  </Radio>
                  <Radio colorScheme="brandScheme" me="10px" value="user">
                    <Text color={textColor} fontSize="sm" fontWeight="500">
                      Usuario
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            )}
          />
        </Card>
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          w="100%"
          h="50"
          mb="24px"
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </Flex>
  );
}
