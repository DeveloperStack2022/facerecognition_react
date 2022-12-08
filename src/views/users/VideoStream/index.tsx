import { Box, Grid } from "@chakra-ui/react";
//Custom Components
import StreamWidget from "./components/StreamWidget";
export default function VideoStream() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <StreamWidget ulrstream="http://localhost:8000/api/v0.1/userpersistencia/detectFaceRecognetion" />
      </Grid>
    </Box>
  );
}
