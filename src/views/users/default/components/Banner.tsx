// Chakra imports
import { Box } from "@chakra-ui/react";
import Card from "components/card/Card";

export default function Banner(props: {
  banner: string;
  [x: string]: any;
  sizeX: number;
  sizeY: number;
}) {
  const {
    banner,
    avatar,
    name,
    job,
    posts,
    followers,
    following,
    sizeX,
    sizeY,
    ...rest
  } = props;
  // Chakra Color Mode

  return (
    <Card
      mb={{ base: "0px", lg: "20px" }}
      w={sizeX}
      h={sizeY}
      alignItems="center"
      {...rest}
    >
      <Box
        as="img"
        // bg={`url(${banner})`}
        src={banner}
        bgSize="cover"
        borderRadius="16px"
        h={sizeY}
        w={sizeX}
      />
    </Card>
  );
}
