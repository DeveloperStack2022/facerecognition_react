import {Text,Box,Grid,SimpleGrid,GridItem } from '@chakra-ui/react'
// TODO: Compoents

import Card from 'components/card/Card' 


const FormInformationTranslate = () => {
    return (
        <Box pt={{base:'130px',md:'80px',xl:'80px'}}>
            <Card>
                <Box bg={'brandScheme.500'}  px='2' py='2' color={'white'}>
                    <Text fontWeight={'bold'} fontSize={'2xl'} >Informacion General</Text>
                </Box>

                <Grid  templateAreas={`
                    "identificacion  identificacion"
                    "NombreCiudadano NombreCiudadano"
                    "lugarNacimiento lugarNacimiento"
                    "fechaNacimientoNacionalidad fechaNacimientoNacionalidad"
                    "SexoEstadoCivil SexoEstadoCivil"
                    "Domicilio Domicilio"
                    "CallesNumeroCasa CallesNumeroCasa"
                    "InstruccionProfesion InstruccionProfesion"
                `} px='2' py='2' border={'1px'}>
                    <GridItem area={'identificacion'}   >
                        <SimpleGrid columns={2}>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'  width={{md:'50%',lg:'50%'}}>Identificacion:</Text>
                                <Text fontWeight={'medium'} display='inline-block' >0123456789</Text>
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block' width={{md:'50%',lg:'50%'}}>Condicion ciudadano:</Text>
                                <Text fontWeight={'medium'} display='inline-block' width={{md:'25%',lg:'25%'}}>CIUDADANO</Text>
                            </Box>
                        </SimpleGrid>
                    </GridItem>
                    <GridItem area={'NombreCiudadano'}>
                        <Box>
                            <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'    width={{md:'25%',lg:'25%'}} >Nombre Ciudadano:</Text>
                            <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'   width={{md:'25%',lg:'25%'}}>Mendieta Piedra Jorge Luis</Text>
                        </Box>
                    </GridItem>
                    <GridItem area={'lugarNacimiento'}>
                        <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'    width={{md:'25%',lg:'25%'}} >Lugar Nacimiento:</Text>
                        <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'     >Azuay/Cuenca/El Sagrado</Text>

                    </GridItem>
                    <GridItem area={'fechaNacimientoNacionalidad'}>
                        <SimpleGrid columns={2}>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'    width={{md:'50%',lg:'50%'}} >Fecha Nacimiento:</Text>
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'    >28/08/1982</Text>
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}} >Nacionalidad:</Text>
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' width={{md:'25%',lg:'25%'}} >Ecuatoriana</Text>
                            </Box>
                        </SimpleGrid>
                    </GridItem>
                    <GridItem area={'SexoEstadoCivil'}>
                            <SimpleGrid columns={2}>
                                <Box>
                                    <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}} >Sexo:</Text>
                                    <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Masculino</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}} >Estado Civil:</Text>
                                    <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Soltero</Text>
                                </Box>
                            </SimpleGrid>

                    </GridItem>
                    <GridItem gridArea={'Domicilio'}>
                        <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'    width={{md:'25%',lg:'25%'}} >Domicilio:</Text>
                        <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Pichincha/Quito/Kennedy</Text>
                    </GridItem>
                    <GridItem area={'CallesNumeroCasa'}>
                        <SimpleGrid columns={2}>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}} >Calles:</Text>
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >De las almendras belladonas el</Text>
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'    width={{md:'50%',lg:'50%'}} >Numero Casa:</Text>
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >N54-09</Text>
                            </Box>
                        </SimpleGrid>
                    </GridItem>
                    <GridItem area={'InstruccionProfesion'}>
                        <SimpleGrid columns={2}>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}} >Instruccion:</Text>
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Superior</Text>
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}} >Profesion:</Text>
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Ingeniero</Text>
                            </Box>
                        </SimpleGrid>
                    </GridItem>
                    
                </Grid>

            </Card>
        </Box>
    )
}

export default FormInformationTranslate 