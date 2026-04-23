import { Box, Center, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface ICardInfo {
    email: string,
    name: string,
    
}

const CardProfile = ({ email, name }: ICardInfo) => {
  return (
    <>
    <Center marginTop={20}>
    <Box padding='25px' borderWidth='1px' borderRadius='lg' backgroundColor='white' width={400} textAlign='center'>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
                
            </Text>
            <Text fontSize='xl' marginBottom={1}>
               email: {email}
            </Text>
            <Text fontSize='xl'>
                   Nome: {name}
                </Text>

            <Link to='/conta/1'>
                Voltar a conta
            </Link>
            
        </Box>
    </Center>
        </>
  )
}

export default CardProfile