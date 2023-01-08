import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
//Redux
import { useAppSelector } from "hooks/redux/hook";
//Custom components
import Banner from "views/users/default/components/Banner";

import { getUserImage } from "features/user/services/user_services";

type DataMetadata = {
  sizeX: number;
  sizeY: number;
  image_base64: string;
};

export default function ViewInfoUsers() {
  const { users } = useAppSelector((state) => state.users);
  const { id } = useParams<{ id: string }>();
  const [ObjectImageUrl, setObjectImageUrl] = useState<DataMetadata[]>([
    { image_base64: "", sizeX: 0, sizeY: 0 },
  ]);
  // const [Size, setSize] = useState<{sizeX:number,sizeY:number}>({sizeX:0,sizeY:0})

  useEffect(() => {
    const get_images = async (num: string) => {
      return await getUserImage(num);
    };
    get_images(id).then((res) => {
      res?.payload.map((item: any) => {
        // setSize({})
        // Decode Base64
        setObjectImageUrl([
          {
            image_base64: item.image_base64,
            sizeX: item.sizeX,
            sizeY: item.sizeY,
          },
        ]);
      });
    });
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
        {ObjectImageUrl.map((item, index) => (
          <Banner
            key={index}
            banner={`data:image/jpeg;base64,${item.image_base64}`}
            name="Nombre test"
            sizeX={item.sizeX}
            sizeY={item.sizeY}
          />
        ))}
      </Grid>
    </Box>
  );
}
