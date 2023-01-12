import React from "react";
import { Box, Grid } from "@chakra-ui/react";

//Custom Components
import Banner from "./components/Banner";

export default function SearchByImage() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        mb="20px"
        templateColumns={{
          base: "1fr",
          lg: "1.62fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner titleBanner="Upload image" />
      </Grid>
    </Box>
  );
}
