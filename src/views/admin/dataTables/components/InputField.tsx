import { Input, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { forwardRef } from "react";
// Types Input
type FormFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  step?: string;
  gridArea?: { [key: string]: string };
  errors: { message: string } | undefined;
  [prop: string]: unknown;
  size: "xs" | "sm" | "md" | "lg";
};

//Component
const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref) => {
  const {
    label,
    placeholder,
    type,
    gridArea,
    step = "1",
    size,
    ...other
  } = props;
  let errorMessage;
  const borderColor = useColorModeValue("secondaryGray.400", "white");
  const color = useColorModeValue("navy.700", "white");
  if (props.errors) {
    errorMessage = props.errors.message;
  }

  return (
    <Box gridArea={gridArea}>
      <Flex justify="space-between">
        <Box
          as="label"
          fontSize="sm"
          fontWeight="normal"
          letterSpacing={"normal"}
          htmlFor={label}
          display="inline-block"
          mb={2}
          color={props["errors"] && "red.500"}
        >
          {label}
        </Box>
        {props.errors && (
          <Text aria-live="polite" color="red.500" fontSize="0.75rem" mb={2}>
            {errorMessage}
          </Text>
        )}
      </Flex>
      <Input
        ref={ref}
        {...other}
        type={type}
        placeholder={placeholder}
        borderColor={props["errors"] ? "red.500" : borderColor}
        id={label}
        step={step}
        size={size}
        color={color}
      />
    </Box>
  );
});
FormField.displayName = "FormField";

export default FormField;
