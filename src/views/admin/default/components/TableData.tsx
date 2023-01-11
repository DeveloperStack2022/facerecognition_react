import { FC } from "react";
import { Text } from "@chakra-ui/react";
//Types Props
import { IUser_db_Data } from "domain/Entities/interfaces/iUser_db";

interface IUserParams extends IUser_db_Data {
  image_base64: string;
}
const TableDataInformationUser: FC<IUserParams> = (props) => {
  const { ...rest } = props;
  return <Text>Modal text information user db</Text>;
};

export default TableDataInformationUser;
