import {Flex,Input,Box,Select,FormControl,FormLabel,IconButton,useMediaQuery,Button } from '@chakra-ui/react'
import {MdSearch} from 'react-icons/md'
export default function FormUserSearch(){
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  
    return (
         <form>
          <Flex flexDirection={{sm:"column",md:"row",lg:"row"}} justifyContent={"space-around"} px="25px" w="100%" columnGap={"4px"}  >
              {/* Component Input numero cedula */}
              <FormControl>
                <FormLabel fontSize={"sm"} color="secondaryGray.500">Numero cedula</FormLabel>
                <Input variant="custom" type="text" placeholder="123..."/>
              </FormControl>
              {/* Component Input nombres */}
              <FormControl>
                <FormLabel fontSize={"sm"} color="secondaryGray.500">Nombres</FormLabel>
                <Input  variant="custom" type="text" placeholder="Nombres"/>
              </FormControl>
              {/* Component Input sexo */}
              <FormControl>
                <FormLabel fontSize={"sm"} color="secondaryGray.500">Sexo</FormLabel>
                <Select placeholder="---">
                  <option value="ciudadano">
                    Masculino
                  </option>
                  <option value="ciudadana">
                    Femenino
                  </option>
                </Select>
              </FormControl>
              <FormControl mb={{base:0,sm:4,md:0,lg:0}}>
                <FormLabel fontSize={"sm"} color="secondaryGray.500">Fecha nacimiento</FormLabel>
                {/* Component Input edad */}
                <Input type="date" />
              </FormControl>
              {/* Component Button Search */}
              {isLargerThan1280 ? <IconButton alignSelf={"end"} variant="action" icon={<MdSearch/>}  size="md" borderRadius={"full"}  aria-label="Search database" /> :  <Button variant={"action"}>Buscar</Button>}
              
          </Flex>
        </form>
    )
}