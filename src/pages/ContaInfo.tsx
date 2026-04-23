import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api"
import { AppContext } from "../components/AppContext"


import CardProfile from "../components/CardProfile"
import { Center, SimpleGrid,Spinner } from "@chakra-ui/react"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}


    


const ContaInfo = () => { 
    const [ userData, setUserData ] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    
  
    return (
        <Center>
            <SimpleGrid columns={1} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size="xl" color="orange.500" />
                        </Center>
                    ) : 
                    <CardProfile 
            name={userData?.name || ''} 
            email={userData?.email || ''} 
            
        />
                }
        
        </SimpleGrid>
        </Center>
    )
}




export default ContaInfo
