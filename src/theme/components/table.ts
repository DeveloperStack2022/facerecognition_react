import { mode } from "@chakra-ui/theme-tools";
export const tableStyles = {
  components: {
    Table: {
      baseStyle: {},
      variants: {
        myTable: (props: any) => ({
          tr: {
            _odd: {
              bg: mode("brand.100", "brand.500")(props),
            },
            _hover: {
              //   bg: mode("brand.100", "brand.500")(props),
            },
          },
          table: {
            border: "1px solid",
            borderColor: mode("brand.600", "white")(props),
          },
        }),
      },
    },
  },
};
