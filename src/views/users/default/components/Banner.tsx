// Chakra imports
import { Box } from "@chakra-ui/react";
import Card from "components/card/Card";

export default function Banner(props: { banner: string; [x: string]: any }) {
  const { banner, avatar, name, job, posts, followers, following, ...rest } =
    props;
  // Chakra Color Mode

  return (
    <Card mb={{ base: "0px", lg: "20px" }} alignItems="center" {...rest}>
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="220px"
        w="100%"
      />
    </Card>
  );
}
