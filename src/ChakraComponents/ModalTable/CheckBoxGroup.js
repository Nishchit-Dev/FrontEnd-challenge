import { Flex, Img, Text, Box, Checkbox } from "@chakra-ui/react";

const CheckBoxOption = () => {
  function AllCheckCustomIcon(props) {
    const { isIndeterminate, isChecked, ...rest } = props;

    return (
      <>
        {isChecked ? (
          <Img src="/Assets/optCheckbox.svg" />
        ) : (
          <Img src="/Assets/Allcheck.svg" />
        )}
      </>
    );
  }
  function CustomIcon(props) {
    const { isIndeterminate, isChecked, ...rest } = props;

    return (
      <>
        {isChecked ? (
          <Img src="/Assets/check.svg" />
        ) : (
          <Img src="/Assets/optCheckbox.svg" />
        )}
      </>
    );
  }

  return (
    <>
      <Flex padding={"5px"} pos={"fixed"} zIndex={100}>
        <Box
          pos={"relative"}
          top={"50px"}
          bg="#17171A"
          w="200px"
          borderRadius={"6px"}
        >
          <Flex
            p="7px 6px"
            justify={"center"}
            alignContent={"baseline"}
            flexDirection={"column"}
          >
            {" "}
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              transform={"0.3s ease"}
              p="2px 10px"
              size="lg"
              colorScheme="#764FFF"
              icon={<AllCheckCustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
              zIndex={1002}
            >
              <Text
                fontSize={"16px"}
                icon={<AllCheckCustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
                fontStyle={"500"}
                color={"#FFFFFF99"}
              >
                All
              </Text>
            </Checkbox>
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              size="lg"
              p="2px 10px"
              colorScheme="#764FFF"
              icon={<CustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
            >
              <Text
                borderRadius={"5px"}
                _hover={{ bg: "#201F23", gap: "15px" }}
                fontSize={"16px"}
                color={"#FFFFFF99"}
                icon={<CustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
              >
                UX/UI Design
              </Text>
            </Checkbox>
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              p="2px 10px"
              size="lg"
              colorScheme="#764FFF"
              icon={<CustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
            >
              <Text
                fontSize={"16px"}
                color={"#FFFFFF99"}
                icon={<CustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
              >
                Frontend
              </Text>
            </Checkbox>
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              p="2px 10px"
              size="lg"
              colorScheme="#764FFF"
              icon={<CustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
            >
              <Text
                fontSize={"16px"}
                id="menuText"
                color={"#FFFFFF99"}
                icon={<CustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
              >
                Back-end
              </Text>
            </Checkbox>
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              size="lg"
              p="2px 10px"
              colorScheme="#764FFF"
              icon={<CustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
            >
              <Text
                fontSize={"16px"}
                id="menuText"
                color={"#FFFFFF99"}
                icon={<CustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
              >
                Full Stack
              </Text>
            </Checkbox>
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              p="2px 10px"
              size="lg"
              colorScheme="#764FFF"
              icon={<CustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
            >
              <Text
                fontSize={"16px"}
                id="menuText"
                color={"#FFFFFF99"}
                icon={<CustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
              >
                Graphic Designer
              </Text>
            </Checkbox>
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              size="lg"
              p="2px 10px"
              colorScheme="#764FFF"
              icon={<CustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
            >
              <Text
                fontSize={"16px"}
                id="menuText"
                color={"#FFFFFF99"}
                icon={<CustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
              >
                Web Designer
              </Text>
            </Checkbox>
            <Checkbox
              borderRadius={"5px"}
              _hover={{ bg: "#201F23", gap: "15px" }}
              size="lg"
              p="2px 10px"
              colorScheme="#764FFF"
              icon={<CustomIcon />}
              style={{ border: "none", boxSizing: "none" }}
            >
              <Text
                fontSize={"16px"}
                id="menuText"
                color={"#FFFFFF99"}
                icon={<CustomIcon />}
                className="dashedText"
                textDecoration={"dashed"}
                style={{ textDecoration: "dashed" }}
              >
                QA
              </Text>
            </Checkbox>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default CheckBoxOption;
