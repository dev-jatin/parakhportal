import React, { useState } from 'react'
import {HStack,Text,Image,Button,Box} from '@chakra-ui/react'
import AICTCLOGO from '../Images/AICTE.png'
import SLALOGO from '../Images/SLALogo.png'
import {Switch} from '@chakra-ui/react'
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'
const Assesmentquiz = () => {

    const [isLanguange,setIsLanguange] = useState("English")
    const [onWhichQuestion,setOnWhichQuestion] = useState(0);
    const [optionChoose,setOptionChoose] = useState('1')
  return (
   
  <HStack h={"100vh"} w={"full"} bgColor={"gray.200"} alignItems={"flex-start"} justifyContent={"flex-start"} flexDir={"column"} >
    <HStack h={"90px"} justifyContent={"space-between"} w={"full"} bgColor={"blue.400"}>
        <HStack>
   <Image pl={"10px"} w={"80px"} src={AICTCLOGO}/>
   <Image pl={"10px"} w={"150px"} src={SLALOGO}/>
   </HStack>

   <Text color={"white"} pl={"15px"}  fontSize={"2xl"}>AI BASED PRE-LEARNING ASSESMENT</Text>

   <Button colorScheme="orange" borderRadius={"20%"} mr={"20px"} >SUBMIT</Button>
    </HStack>

    <HStack h={"50px"} bgColor={"white"} w={"full"} justifyContent={"space-between"}>
        <HStack>
        <Button ml={"10px"} borderRightRadius={"10px"} h={"35px"} bgColor={"purple.400"} >Topics </Button> 
        <Text color={"blue.400"} fontSize={"23px"} fontWeight={"bold"}>{`>`}</Text>

        <Button  borderRightRadius={"10px"} h={"35px"} bgColor={'green.400'} >Engineering </Button> 
        </HStack>

        <HStack mr={"20px"} >
        <Text fontSize={"17px"}>Select Languange : { isLanguange}</Text>   <Switch onChange={()=>{
            if(isLanguange==="English"){
                setIsLanguange("हिंदी")
            }else{
                setIsLanguange("English")
            }
        }} colorScheme={"orange"}  />

        <Text fontSize={"19px"} fontWeight={"bold"} color={"green.400"}>Time Left : 100 Minutes </Text>
         
        </HStack>
    </HStack>

    <HStack w={"full"} h={"500px"} justifyContent={"center"} > 
      <HStack w={"95%"} h={"full"}  >
       <HStack w={"70%"} h={"full"}  flexDir={"column"} alignItems={"flex-start"}>
         
         <HStack w={"100%"} mt={"20px"} flexDir={"column"} h={"300px"} bgColor={"white"}  border={"2px solid #518ec4"} alignItems={"flex-start"}>

          <HStack w={"full"} bgColor={"gray.300"} h={"40px"} p={"10px"} borderBottom={"3px solid gray"}  >
          <Text fontWeight={"bold"} fontSize={"20px"}>Question : {onWhichQuestion+1}</Text>
          </HStack>

          <HStack w={"full"} flexDir={"column"} alignItems={"flex-start"} h={"100px"}  p={"20px"}>
           <Text fontSize={"17px"} fontWeight={"semibold"} borderBottom={"3px solid #98c5ed"}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odit deleniti architecto ea illum esse expedita sint et? Expedita odit provident quidem nihil blanditiis vitae aspernatur neque repudiandae veritatis ut?</Text>
               
               <HStack w={"100%"}>

               
           <HStack w={"50%"} >
           <RadioGroup w={"full"} onChange={setOptionChoose} value={optionChoose}>
          
          <Stack    >

          
           <Radio minH={"40px"} value='1'>Dennis Ricche</Radio>
        <Radio minH={"40px"} value='2'>who are you </Radio>
        </Stack>
        
        </RadioGroup>
           </HStack>

           <HStack w={"50%"} >
           <RadioGroup w={"full"} onChange={setOptionChoose} value={optionChoose}>
          
          <Stack    >

          
           <Radio minH={"40px"} value='3'>Hello how fksjflksdjf kl ljsklf</Radio>
        <Radio minH={"40px"} value='4'>who are you </Radio>
        </Stack>
        
        </RadioGroup>
           </HStack>
           </HStack>
          </HStack>

         </HStack>

         
         <HStack w={"full"} h={"80px"} mt={"20px"} >
          <Button fontSize={"13px"} color={"white"} bgColor={"yellow.400"} w={"150px"} borderRadius={"0px"}>Previous </Button>
          <Button fontSize={"13px"} w={"150px"} border={"1px solid blue"} borderRadius={"0px"}>Close</Button>
          <Button fontSize={"13px"} color={"white"} bgColor={"red.600"} w={"170px"} borderRadius={"0px"}>Skip & answer Later(1)</Button>
          <Button fontSize={"13px"} color={"white"} bgColor={"yellow.500"} w={"170px"} borderRadius={"0px"}>Save & review later (1)</Button>
          <Button fontSize={"13px"}  color={"white"} bgColor={"green.500"} w={"170px"} borderRadius={"0px"}>Save & Next(1)</Button>
         </HStack>
       </HStack>

       <HStack w={"30%"}  bgColor={"white"}>
         
      
         

          <Box w={"full"} h={"450px"} px={"20px"}  overflowY={"scroll"}>
            {Array(100).fill("").map((item,index)=>{
          return   <Button m={"8px"} p={"0px"} bgColor={(onWhichQuestion===index)?"purple":"none"} shadow={"md"} color={(onWhichQuestion===index)?"white":"none"} onClick={()=>{
            setOnWhichQuestion(index);
           }} borderRadius={"50%"}>{index+1}</Button>
         })}
           </Box>
         
         
       </HStack>
      </HStack>
    </HStack>

  </HStack>
  )
}

export default Assesmentquiz