import React, { useState } from "react";
import { HStack, Text, Image, Button, Box } from "@chakra-ui/react";
import AICTCLOGO from "../Images/AICTE.png";
import SLALOGO from "../Images/SLALogo.png";
import { Switch } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
const Assesmentquiz = () => {
  const [isLanguange, setIsLanguange] = useState("English");
  const [onWhichQuestion, setOnWhichQuestion] = useState(0);
  const [optionChoose, setOptionChoose] = useState("1");
  const [questionNumber, setQuestionNumber] = useState(2);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const assesmentData = [
    {
      id: 0,
      quesiton: "What is the largest internal organ in the human body? ",
      answer: "Liver",
      options: {
        op1: "Lungs",
        op2: "Heart",
        op3: "Kidneys",
        op4: "Liver",
      },
      isCheckedAndSaved: false,
      isSkiped: true,
      isSavedandReviewLater: false,
      timeTaken: 0,
    },
    {
      id: 1,
      quesiton:
        "Which of the following British presenters never presented ‘Strictly Comes Dancing’? ",
      answer: "Tess Daly",
      options: {
        op1: "Claudia Winkleman",
        op2: "Tess Daly",
        op3: "Andrea Hamilton",
        op4: "Stacey Dooley",
      },

      isCheckedAndSaved: true,
      isSkiped: false,
      isSavedandReviewLater: true,
      timeTaken: 0,
    },
    {
      id: 2,
      quesiton: "Question 3 answer",
      answer: "answer",
      options: {
        op1: "3",
        op2: "4",
        op3: "5",
        op4: "6",
      },

      isCheckedAndSaved: false,
      isSkiped: false,
      isSavedandReviewLater: true,
      timeTaken: 0,
    },
  ];
  return (
    <HStack
      h={"100vh"}
      w={"full"}
      bgColor={"gray.200"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      flexDir={"column"}
    >
      <HStack h={"90px"} justifyContent={"space-between"} w={"full"} bgColor={"blue.400"}>
        <HStack>
          <Image pl={"10px"} w={"80px"} src={AICTCLOGO} />
          <Image pl={"10px"} w={"150px"} src={SLALOGO} />
        </HStack>

        <Text color={"white"} pl={"15px"} fontSize={"2xl"}>
          AI BASED PRE-LEARNING ASSESSMENT
        </Text>

        <Button colorScheme="orange" borderRadius={"20%"} mr={"20px"}>
          SUBMIT
        </Button>
      </HStack>

      <HStack h={"50px"} bgColor={"white"} w={"full"} justifyContent={"space-between"}>
        <HStack>
          <Button ml={"10px"} borderRightRadius={"10px"} h={"35px"} bgColor={"purple.400"}>
            Topics{" "}
          </Button>
          <Text color={"blue.400"} fontSize={"23px"} fontWeight={"bold"}>{`>`}</Text>

          <Button borderRightRadius={"10px"} h={"35px"} bgColor={"green.400"}>
            Engineering{" "}
          </Button>
        </HStack>

        <HStack mr={"20px"}>
          <Text fontSize={"17px"}>Select Languange : {isLanguange}</Text>{" "}
          <Switch
            onChange={() => {
              if (isLanguange === "English") {
                setIsLanguange("हिंदी");
              } else {
                setIsLanguange("English");
              }
            }}
            colorScheme={"orange"}
          />
          <Text fontSize={"19px"} fontWeight={"bold"} color={"green.400"}>
            Time Left : 100 Minutes{" "}
          </Text>
        </HStack>
      </HStack>

      <HStack w={"full"} h={"500px"} justifyContent={"center"}>
        <HStack w={"95%"} h={"full"}>
          <HStack w={"70%"} h={"full"} flexDir={"column"} alignItems={"flex-start"}>
            <HStack
              w={"100%"}
              mt={"20px"}
              flexDir={"column"}
              h={"300px"}
              bgColor={"white"}
              border={"2px solid #518ec4"}
              alignItems={"flex-start"}
            >
              <HStack
                w={"full"}
                bgColor={"gray.300"}
                h={"40px"}
                p={"10px"}
                borderBottom={"3px solid gray"}
              >
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Question : {questionNumber + 1}
                </Text>
              </HStack>

              <HStack
                w={"full"}
                flexDir={"column"}
                alignItems={"flex-start"}
                h={"100px"}
                p={"20px"}
              >
                <Text fontSize={"17px"} fontWeight={"semibold"} borderBottom={"3px solid #98c5ed"}>
                  {assesmentData[1].quesiton}
                </Text>

                <HStack w={"100%"}>
                  <HStack w={"50%"}>
                    <RadioGroup w={"full"} onChange={setOptionChoose} value={optionChoose}>
                      <Stack>
                        <Radio minH={"40px"} value={assesmentData[questionNumber].options.op1}>
                          {assesmentData[questionNumber].options.op1}
                        </Radio>
                        <Radio minH={"40px"} value={assesmentData[questionNumber].options.op2}>
                          {assesmentData[questionNumber].options.op2}
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </HStack>

                  <HStack w={"50%"}>
                    <RadioGroup w={"full"} onChange={setOptionChoose} value={optionChoose}>
                      <Stack>
                        <Radio minH={"40px"} value={assesmentData[questionNumber].options.op3}>
                          {assesmentData[questionNumber].options.op3}
                        </Radio>
                        <Radio minH={"40px"} value={assesmentData[questionNumber].options.op4}>
                          {assesmentData[questionNumber].options.op4}{" "}
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </HStack>
                </HStack>
              </HStack>
            </HStack>

            <HStack w={"full"} h={"80px"} mt={"20px"}>
              <Button
                fontSize={"13px"}
                color={"white"}
                bgColor={"yellow.400"}
                w={"150px"}
                borderRadius={"0px"}
                onClick={() => {
                  if (questionNumber > 0) {
                    setQuestionNumber(questionNumber - 1);
                  }
                }}
              >
                Previous{" "}
              </Button>
              <Button
                fontSize={"13px"}
                onClick={onOpen}
                w={"150px"}
                border={"1px solid blue"}
                borderRadius={"0px"}
              >
                Close
              </Button>
              <Button
                fontSize={"13px"}
                color={"white"}
                bgColor={"red.600"}
                w={"170px"}
                borderRadius={"0px"}
              >
                Skip & answer Later(1)
              </Button>
              <Button
                fontSize={"13px"}
                color={"white"}
                bgColor={"yellow.500"}
                w={"170px"}
                borderRadius={"0px"}
              >
                Save & review later (1)
              </Button>
              <Button
                fontSize={"13px"}
                color={"white"}
                bgColor={"green.500"}
                w={"170px"}
                borderRadius={"0px"}
              >
                Save & Next(1)
              </Button>
            </HStack>
          </HStack>
          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Do You Want To Close Your Assessment ?
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Decline
                  </Button>
                  <Button colorScheme="red" onClick={onClose} ml={3}>
                    Accept
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
          <HStack w={"30%"} bgColor={"white"}>
            <Box w={"full"} h={"450px"} px={"20px"} overflowY={"scroll"}>
              {assesmentData.map((item, index) => {
                return (
                  <Button
                    m={"8px"}
                    p={"0px"}
                    bgColor={
                      item.isCheckedAndSaved === true
                        ? "green"
                        : item.isSavedandReviewLater === true
                        ? "yellow"
                        : item.isSkiped === true
                        ? "red"
                        : questionNumber === index
                        ? "purple"
                        : "none"
                    }
                    shadow={"md"}
                    color={
                      item.isCheckedAndSaved === true
                        ? "white"
                        : item.isSavedandReviewLater === true
                        ? "white"
                        : item.isSkiped === true
                        ? "white"
                        : "none"
                    }
                    onClick={() => {
                      setQuestionNumber(index);
                    }}
                    borderRadius={"50%"}
                  >
                    {index + 1}
                  </Button>
                );
              })}
            </Box>
          </HStack>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Assesmentquiz;
