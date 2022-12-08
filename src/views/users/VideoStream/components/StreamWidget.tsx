import { Img } from "@chakra-ui/react";
//Components
import Card from "components/card/Card";

export default function StreamWidget(props: { ulrstream: string }) {
  const { ulrstream, ...rest } = props;
  return (
    <Card width={"100%"} height="100%">
      <Img src={ulrstream} width="100%" height={"100%"} />
    </Card>
  );
}
