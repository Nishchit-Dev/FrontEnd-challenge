import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Img,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

const ModalTable = () => {
  return (
    <>
      <TableContainer p="10px" border={"none"}>
        <Table variant="simple" border={"none"}>
          <Thead>
            <Tr>
              <Th border={"none"} fontWeight={"200"} color={"#FFFFFF99"}>
                Model
              </Th>
              <Th border={"none"} fontWeight={"200"} color={"#FFFFFF99"}>
                Versions
              </Th>{" "}
              <Th border={"none"} fontWeight={"200"} color={"#FFFFFF99"}>
                License
              </Th>
              <Th border={"none"} fontWeight={"200"} color={"#FFFFFF99"}>
                Contributors
              </Th>
              <Th border={"none"} fontWeight={"200"} color={"#FFFFFF99"}>
                Rating
              </Th>
            </Tr>
          </Thead>
          <Tbody outline={"none"}>
            <Tr>
              <Td border={"none"}>
                <Flex gap={"10px"}>
                  <Img src="/icons/chatgpt.svg" />
                  <Text fontWeight={"400"}>Chat GPT</Text>
                </Flex>
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                v2.1
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                MIT
              </Td>
              <Td border={"none"}>
                <Flex justify={"flex-end"} alignContent={"center"}>
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    left={"10px"}
                    zIndex={11}
                  />
                  <Img
                    src={"/icons/stokeprofile/p2.svg"}
                    pos={"relative"}
                    left={"0px"}
                    zIndex={12}
                  />
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    zIndex={13}
                    left={"-10px"}
                  />
                </Flex>
              </Td>
              <Td border={"none"}>
                <Flex justify={"center"} alignContent={"center"} gap={"5px"}>
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td border={"none"}>
                {" "}
                <Flex gap={"10px"}>
                  <Img src="/icons/bard.svg" />
                  <Text>Chat GPT</Text>
                </Flex>
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                v2.1
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                MIT
              </Td>
              <Td border={"none"}>
                <Flex justify={"flex-end"} alignContent={"center"}>
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    left={"10px"}
                    zIndex={11}
                  />
                  <Img
                    src={"/icons/stokeprofile/p2.svg"}
                    pos={"relative"}
                    left={"0px"}
                    zIndex={12}
                  />
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    left={"-10px"}
                    zIndex={13}
                  />
                </Flex>
              </Td>
              <Td border={"none"}>
                <Flex justify={"center"} alignContent={"center"} gap={"5px"}>
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td border={"none"}>
                {" "}
                <Flex gap={"10px"}>
                  <Img src="/icons/bard.svg" />
                  <Text>Chat GPT</Text>
                </Flex>
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                v2.1
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                MIT
              </Td>
              <Td border={"none"}>
                <Flex justify={"flex-end"} alignContent={"center"}>
                  <Img
                    src={"/icons/stokeprofile/p2.svg"}
                    pos={"relative"}
                    left={"0px"}
                    zIndex={12}
                  />
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    zIndex={13}
                    left={"-10px"}
                  />
                </Flex>
              </Td>
              <Td border={"none"}>
                <Flex justify={"center"} alignContent={"center"} gap={"5px"}>
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/stokeprofile/star.svg"} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td border={"none"}>
                {" "}
                <Flex gap={"10px"}>
                  <Img src="/icons/bard.svg" />
                  <Text>Chat GPT</Text>
                </Flex>
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                v0.5
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                Private
              </Td>
              <Td border={"none"}>
                <Flex justify={"flex-end"} alignContent={"center"}>
                  <Img
                    src={"/icons/stokeprofile/p2.svg"}
                    pos={"relative"}
                    left={"-10px"}
                    zIndex={12}
                  />
                </Flex>
              </Td>
              <Td border={"none"}>
                <Flex justify={"center"} alignContent={"center"} gap={"5px"}>
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td border={"none"}>
                {" "}
                <Flex gap={"10px"}>
                  <Img src="/icons/bard.svg" />
                  <Text>Chat GPT</Text>
                </Flex>
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                v2.1
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                MIT
              </Td>
              <Td border={"none"}>
                <Flex justify={"flex-end"} alignContent={"center"}>
                  <Img
                    src={"/icons/stokeprofile/p2.svg"}
                    pos={"relative"}
                    left={"10px"}
                    zIndex={12}
                  />
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    zIndex={13}
                    left={"0px"}
                  />
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    zIndex={14}
                    left={"-10px"}
                  />
                </Flex>
              </Td>
              <Td border={"none"}>
                <Flex justify={"center"} alignContent={"center"} gap={"5px"}>
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td border={"none"}>
                {" "}
                <Flex gap={"10px"}>
                  <Img src="/icons/bard.svg" />
                  <Text>Chat GPT</Text>
                </Flex>
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                v2.1
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                MIT
              </Td>
              <Td border={"none"}>
                <Flex justify={"flex-end"} alignContent={"center"}>
                  <Img
                    src={"/icons/stokeprofile/p2.svg"}
                    pos={"relative"}
                    left={"0px"}
                    zIndex={12}
                  />
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    zIndex={13}
                    left={"-10px"}
                  />
                  
                </Flex>
              </Td>
              <Td border={"none"}>
                <Flex justify={"center"} alignContent={"center"} gap={"5px"}>
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td border={"none"}>
                {" "}
                <Flex gap={"10px"}>
                  <Img src="/icons/bard.svg" />
                  <Text>Chat GPT</Text>
                </Flex>
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                v0.1
              </Td>
              <Td border={"none"} color={"#FFFFFF99"}>
                MIT
              </Td>
              <Td border={"none"}>
                <Flex justify={"flex-end"} alignContent={"center"}>
                  <Img
                    src={"/icons/stokeprofile/p2.svg"}
                    pos={"relative"}
                    left={"10px"}
                    zIndex={12}
                  />
                  <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    zIndex={13}
                    left={"0px"}
                  />
                    <Img
                    src={"/icons/stokeprofile/p1.svg"}
                    pos={"relative"}
                    zIndex={14}
                    left={"-10px"}
                  />
                </Flex>
              </Td>
              <Td border={"none"}>
                <Flex justify={"center"} alignContent={"center"} gap={"5px"}>
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/Unstar.svg"} />
                  <Img src={"/icons/star/star.svg"} />
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ModalTable;
