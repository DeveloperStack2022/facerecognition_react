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
} from "@chakra-ui/react";
//custom components
import Card from "components/card/Card";
import { FormEvent } from "react";
import { useForm, Controller } from "react-hook-form";
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
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const sendData = (e: FormEvent<HTMLInputElement>) => {
    handleSubmit(async (data) => {
      const user_register = {
        email: data.email,
        password: data.password,
        username: data.username,
        rol: data.rol,
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
          variant="custom"
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
        <Input
          fontSize="sm"
          placeholder="Min 6 caracteres"
          mb="24px"
          size="lg"
          type={"password"}
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
        <Card mb="24px">
          <Text color={textColor} fontWeight="700" fontSize={"md"} mb="2">
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
                      Admin
                    </Text>
                  </Radio>
                  <Radio colorScheme="brandScheme" me="10px" value="user">
                    <Text color={textColor} fontSize="sm" fontWeight="500">
                      User
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
