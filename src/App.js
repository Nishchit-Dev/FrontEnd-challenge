import React from "react";
import { Box, Center, Flex, Img, Stack, Text } from "@chakra-ui/react";
import "./App.css";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import ModalTable from "./ChakraComponents/ModalTable/ModalTable";

const TaskBox = () => {
  function CustomIcon(props) {
    const { isIndeterminate, isChecked, ...rest } = props;

    return (
      <>
        {isChecked ? (
          <Img src="/Assets/check.svg" />
        ) : (
          <Img src="/Assets/Default.svg" />
        )}
      </>
    );
  }

  return (
    <>
      {
        <Box w="25%" h="100%" bg={"#26252A"} borderRadius={"12px"}>
          <Box padding={"32px"}>
            <Stack>
              <Text fontWeight={"600"} fontSize={"24px"}>
                Today's Task
              </Text>
              <Checkbox
                size="lg"
                colorScheme="#764FFF"
                icon={<CustomIcon />}
                style={{ border: "none", boxSizing: "none" }}
              >
                <Text
                  icon={<CustomIcon />}
                  className="dashedText"
                  textDecoration={"dashed"}
                  style={{ textDecoration: "dashed" }}
                >
                  Front-end
                </Text>
              </Checkbox>
              <Checkbox
                icon={<CustomIcon />}
                size="lg"
                colorScheme="#764FFF"
                defaultChecked
              >
                {" "}
                Review the Design
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="#764FFF"
                icon={<CustomIcon />}
                defaultChecked
              >
                {" "}
                Estimate the time
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="#764FFF"
                icon={<CustomIcon />}
                defaultChecked
              >
                {" "}
                Code UI
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="#764FFF"
                icon={<CustomIcon />}
                defaultChecked
              >
                {" "}
                Testing
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="#764FFF"
                icon={<CustomIcon />}
                defaultChecked
              >
                {" "}
                Submit
              </Checkbox>
            </Stack>
          </Box>
        </Box>
      }
    </>
  );
};
const ClockBox = () => {
  return (
    <>
      {
        <Box w="25%" h="100%" bg={"#26252A"} borderRadius={"12px"}>
          <Box padding={"32px"}>
            <Text>Clock Box</Text>
          </Box>
        </Box>
      }
    </>
  );
};

const ModelBox = () => {
  return (
    <>
      {
        <Box w="50%" h="100%" bg={"#26252A"} borderRadius={"12px"} p="5px">
          <Box padding={"32px"} bg={"#201F23"} borderRadius={"9px"}>
            <Text fontWeight={"600"} fontSize={"24px"}>
              All Models
            </Text>
            <Box w="100%" marginTop={"18px"} marginBottom={"15px"}>
              <Flex gap="10px">
                <Box
                  p="7px 18px"
                  bg={"#17171A"}
                  borderRadius={"999px"}
                  display={"flex"}
                  flexDir={"row"}
                  gap={"6px"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Text>Model</Text>
                  <Img src="/Assets/Stroke.svg" w="15px" />
                </Box>
                <Box
                  p="7px 18px"
                  bg={"#17171A"}
                  borderRadius={"999px"}
                  display={"flex"}
                  flexDir={"row"}
                  gap={"6px"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Text>Model</Text>
                  <Img src="/Assets/Stroke.svg" />
                </Box>
                <Box
                  p="7px 18px"
                  bg={"#17171A"}
                  borderRadius={"999px"}
                  display={"flex"}
                  flexDir={"row"}
                  gap={"6px"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Text>Model</Text>
                  <Img src="/Assets/Stroke.svg" />
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box position={"relative"} top={"-50px"} p="">
            <ModalTable />
          </Box>
        </Box>
      }
    </>
  );
};
function App() {
  return (
    <>
      <Center h="100vh" bg={"#6466F2"} boxShadow={"2xl"}>
        <Box
          boxShadow={"dark-lg"}
          w="1274px"
          h="700px"
          bg="#17171A"
          padding={"13px"}
          borderRadius={"24px"}
        >
          <Flex h="100%" flexDirection={"column"} gap={"10px"}>
            <Flex flex={1} h="85%" gap={"10px"}>
              <TaskBox />
              <ModelBox />
              <ClockBox />
            </Flex>

            <Flex h="20%">
              <Box w="100%" borderRadius={"12px"} bg={"#26252A"}></Box>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
}

export default App;
