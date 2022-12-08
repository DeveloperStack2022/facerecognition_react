import { Avatar, WrapItem } from "@chakra-ui/react";

interface IProps {
  urlImage?: string;
}

export const BoxImage = ({ urlImage }: IProps) => {
  return (
    <WrapItem>
      <Avatar size="2xl" src={urlImage} />
    </WrapItem>
  );
};
