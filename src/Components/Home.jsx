
import React, { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'
import {HStack,Text,InputLeftElement,InputGroup,Button,Image} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { FaLock } from "react-icons/fa";
import { Icon } from '@chakra-ui/react'
import { FaUser } from "react-icons/fa";
import  AICTE from '../Images/AICTE.png'
import { FaRobot } from "react-icons/fa";;

const Home = () => {
 



 
  return (
   <>
   <HStack w={"100%"} h={"100vh"}  bgColor={"blue.300"}>
    
    <HStack h={"90%"} w={"100%"} >
     <HStack h={"full"}  justifyContent={"center"} alignItems={"center"} flexDir={"column"} w={"30%"} >
      <Image w={"120px"} src={AICTE}/>
      <HStack><FaRobot fontSize={"30px"} />
      <Text fontSize={"2xl"} >   AI BASED LEARNING</Text></HStack>
        <Text fontSize={"26px"} fontWeight={"semibold"}  color={"whiteAlpha.900"}>Welcome</Text>

        <HStack w={"70%"}>
        <Text color={"white"}>
        Login to start exploring the Student Learning Assessment Program
        </Text>
        </HStack>
     </HStack>

     <HStack h={"full"} borderLeftRadius={"20%"} mr={"10px"} borderRightRadius={"2%"} shadow={"dark-lg"}  w={"70%"} bgColor={"white"}>
      
      <HStack w={"50%"} h={"70%"} justifyContent={"center"} flexDir={"column"}  alignItems={"center"} borderRight={"2px solid gray"} borderRadius={"2px"}>
      <Text color={"blue.400"} fontSize={"2xl"}>General Information</Text>
          <HStack alignItems={"flex-start"} justifyContent={"flex-start"} flexDir={"column"} pl={"20px"}>
        
        <Text alignItems={"flex-start"} fontSize={"15px"}>1. Kindly login with your given username and password</Text>
        <Text fontSize={"15px"}>2. Do not share your credential details like password with anyone.</Text>
        <Text fontSize={"15px"}>3. Click here to go back to home  page.</Text>
        <Text fontSize={"15px"}> 4. IMPORTANT: Please raise grievance in https://css.aicte-india.org/, if OTP is not received on registered email or mobile number.</Text>
        </HStack>

      </HStack>

      <HStack w={"50%"} >
        
        <HStack w={"70%"} flexDir={"column"}>
        <Text fontWeight={"semibold"} color={"blue.500"} fontSize={"20px"}>Sign In</Text>
      <InputGroup>
    <InputLeftElement pointerEvents='none'>
    <Icon as={FaUser} color={"blue.400"} />
    </InputLeftElement>
    <Input  border={"1px solid #55c0fa"} borderLeftRadius={"10%"} borderRightRadius={"10%"} type='text' placeholder='Enter Your Email ' />
  </InputGroup>


  <InputGroup>
    <InputLeftElement pointerEvents='none'>
    <Icon as={FaLock} color={"blue.400"} />
    </InputLeftElement>
    <Input border={"1px solid #55c0fa"} borderRightRadius={"10%"} borderLeftRadius={"10%"}  type='text' placeholder='Enter Your Password ' />
  </InputGroup>

 

  
  <Button borderLeftRadius={"20%"} borderRightRadius={"20%"}    colorScheme={"blue"}>Sign In</Button>
  </HStack>
  </HStack>
      </HStack>

     </HStack>
    </HStack>

   </>
  )
}

export default Home