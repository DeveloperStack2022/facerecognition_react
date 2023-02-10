import { mode } from "@chakra-ui/theme-tools";
export const tableStyles = {
  components: {
    Table: {
      baseStyle: {},
      variants: {
        myTable: (props: any) => ({
          tr: {
            th: {
              backgroundColor: "blueCustom.500",
              w: "25%",
            },
            _odd: {
              bg: mode("blueCustom.500", "brand.500")(props),
              color: "white",
            },
            _even: {
              bg: mode("blueCustom.100", "transparent")(props),
              color: mode("secondaryGray.900", "white")(props),
            },
            _hover: {
              //   bg: mode("brand.100", "brand.500")(props),
            },
          },
          table: {
            border: "1px solid",
            borderColor: mode("blueCustom.500", "brand.500")(props),
          },
        }),
      },
    },
  },
};
