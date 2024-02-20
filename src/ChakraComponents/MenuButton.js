import { Box, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import CheckBoxOption from "./ModalTable/CheckBoxGroup";

const MenuButton = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <Box
        p="7px 18px"
        bg={"#17171A"}
        borderRadius={"999px"}
        display={"flex"}
        flexDir={"row"}
        gap={"6px"}
        alignContent={"center"}
        justifyContent={"center"}
        onClick={(e) => {
          setFlag(!flag);
          console.log("hello")
        }}
      >
        <Text>Model</Text>
        <Img src="/Assets/Stroke.svg" w="15px" />
      </Box>
      {flag ? (
        <>
          <CheckBoxOption />
        </>
      ) : null}
    </>
  );
};

export default MenuButton;
