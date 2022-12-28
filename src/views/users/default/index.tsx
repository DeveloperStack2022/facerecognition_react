import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
//Redux
import { useAppSelector } from "hooks/redux/hook";
//Custom components
import Banner from "views/users/default/components/Banner";

export default function ViewInfoUsers() {
  const { users } = useAppSelector((state) => state.users);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (users.length === 0) {
      console.log(`Se va hacer la peticion ${id}`);
    }
    return () => {};
  }, [id]);

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
        <Banner
          banner={`http://localhost:8000/api/v0.1/userpersistencia/image/${id}.jpeg`}
          name="Nombre test"
        />
      </Grid>
    </Box>
  );
}
