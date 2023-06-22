import {FC} from 'react'
import {Text,Box,Grid,SimpleGrid,GridItem,Image,TextProps, } from '@chakra-ui/react'
// TODO: Custom hooks 
import {useMediaQuery} from 'hooks/useMediaQuery'
// TODO: Compoents
import Card from 'components/card/Card' 
/**
 * 
 * @returns 
 * 
 *  templateAreas={`
                        "identificacion  identificacion Imagen"
                        "NombreCiudadano NombreCiudadano Imagen"
                        "lugarNacimiento lugarNacimiento Imagen"
                        "fechaNacimientoNacionalidad fechaNacimientoNacionalidad Imagen"
                        "SexoEstadoCivil SexoEstadoCivil Imagen"
                        "Domicilio Domicilio Imagen"
                        "CallesNumeroCasa CallesNumeroCasa Imagen"
                        "InstruccionProfesion InstruccionProfesion Imagen"
                    `} 
 */

interface SubTextProp  extends TextProps{
    text:string;
    type:"SMALL" | "NORMAL"
}

const SubText:FC<SubTextProp>  = ({text,type,...props}) => {
    
    if(type == 'SMALL'){
        return <Text fontWeight={'semibold'} fontSize='xs' color='gray.500' textTransform={'uppercase'} {...props} >{text}</Text>
    }else if(type == 'NORMAL'){
        return <Text fontWeight={'medium'} textTransform={'uppercase'} {...props} >{text}</Text>
    }
}


const FormInformationTranslate = () => {
    const mediaQuery = useMediaQuery('(min-width: 768px)')
    return (
        <Box pt={{base:'130px',md:'80px',xl:'80px'}}>
            <Card>
                <Box bg={'brandScheme.500'}  px='2' py='2' color={'white'}>
                    <Text fontWeight={'bold'} fontSize={'2xl'} >Informacion General</Text>
                </Box>

                <Grid  templateAreas={{
                    base:`
                            "identificacion  identificacion Imagen"
                            "NombreCiudadano NombreCiudadano Imagen"
                            "lugarNacimiento lugarNacimiento Imagen"
                            "fechaNacimientoNacionalidad fechaNacimientoNacionalidad Imagen"
                            "SexoEstadoCivil SexoEstadoCivil Imagen"
                            "Domicilio Domicilio Imagen"
                            "CallesNumeroCasa CallesNumeroCasa Imagen"
                            "InstruccionProfesion InstruccionProfesion Imagen"
                    `,
                    lg: `
                        "identificacion  identificacion Imagen"
                        "NombreCiudadano NombreCiudadano Imagen"
                        "lugarNacimiento lugarNacimiento Imagen"
                        "fechaNacimientoNacionalidad fechaNacimientoNacionalidad Imagen"
                        "SexoEstadoCivil SexoEstadoCivil Imagen"
                        "Domicilio Domicilio Imagen"
                        "CallesNumeroCasa CallesNumeroCasa Imagen"
                        "InstruccionProfesion InstruccionProfesion Imagen"
                    `,
                    sm:`
                        "Imagen Imagen"
                        "identificacion  identificacion "
                        "NombreCiudadano NombreCiudadano "
                        "lugarNacimiento lugarNacimiento "
                        "fechaNacimientoNacionalidad fechaNacimientoNacionalidad "
                        "SexoEstadoCivil SexoEstadoCivil "
                        "Domicilio Domicilio "
                        "CallesNumeroCasa CallesNumeroCasa "
                        "InstruccionProfesion InstruccionProfesion "
                    `,
                }} 
                templateColumns={{
                    base:'1fr 1fr 260px',
                    lg:'1fr 1fr 260px',
                    sm:'1fr'
                }}
                 px='2' py='2' border={'1px'} borderTop={'none'} 
                >
                    {
                        !mediaQuery ? (
                            <>
                                <GridItem area={'Imagen'}  >
                                    <Image src='https://avatars3.githubusercontent.com/u/100200?s=460&v=4' objectFit={'cover'} h='262px' />
                                </GridItem>
                                <GridItem area={'identificacion'}  >
                                    <Text fontWeight={'semibold'} textTransform={'uppercase'} fontSize='xs' color='gray.500' >Identificacion:</Text>
                                    <Text fontWeight={'medium'} >0123456789</Text>
                                </GridItem>
                                <GridItem area={'NombreCiudadano'}>
                                    <Text fontWeight={'semibold'} textTransform={'uppercase'} fontSize='xs' color='gray.500'>Nombre Ciudadano:</Text>
                                    <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'   width={{md:'25%',lg:'25%'}}>Mendieta Piedra Jorge Luis</Text>
                                </GridItem>
                                <GridItem area='lugarNacimiento'>
                                    <SubText  type='SMALL' text="Lugar Nacimiento:"/>
                                    <SubText text='Azuay/Cuenca/El Sagrado' type='NORMAL' />
                                </GridItem>
                                <GridItem area='fechaNacimientoNacionalidad'>
                                    <SubText  type='SMALL' text="Fecha Nacimiento:"/>
                                    <SubText text='28/08/1982' type='NORMAL' />
                                    <SubText  type='SMALL' text="Nacionalidad:"/>
                                    <SubText type='NORMAL' text='Ecuatoriana' />
                                </GridItem>
                                <GridItem area='SexoEstadoCivil'>
                                    <SubText  type='SMALL' text="Sexo:"/>
                                    <SubText  type='NORMAL' text='Masculino' />
                                    <SubText  type='SMALL' text="Estado Civil:"/>
                                    <SubText  type='NORMAL' text='SOLTERO' />
                                </GridItem>
                                <GridItem gridArea={'Domicilio'}>
                                    <SubText  type='SMALL' text="Domicilio:"/>
                                    <SubText  type='NORMAL' text='Pichincha/Quito/Kennedy' />
                                </GridItem>
                                <GridItem gridArea={'CallesNumeroCasa'}>
                                    <SubText  type='SMALL' text="Calles:"/>
                                    <SubText  type='NORMAL' text='De las almendras belladonas el' />
                                    <SubText  type='SMALL' text="Numero Casa:"/>
                                    <SubText  type='NORMAL' text="N54-09"/>
                                </GridItem>
                                <GridItem gridArea={'InstruccionProfesion'}>
                                    <SubText type='SMALL' text={'Instruccion'} />
                                    <SubText  type='NORMAL' text="SUPERior"/>
                                    <SubText type='SMALL' text={'Profesion'} />
                                    <SubText  type='NORMAL' text="Ingeniero"/>
                                </GridItem>
                            </>
                        ): (
                            <>
                                <GridItem area={'Imagen'}   >
                    <Image src='https://avatars3.githubusercontent.com/u/100200?s=460&v=4' objectFit={'cover'} h='262px' />
                 </GridItem>
                <GridItem area={'identificacion'}   >
                    <SimpleGrid columns={2}>
                        <Box width={{sm:'100%'}}>
                            <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}}>Identificacion:</Text>
                            <Text fontWeight={'medium'} display='inline-block' width={{md:'50%',lg:'50%'}} >0123456789</Text>
                        </Box>
                        <Box>
                            <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'  width={{md:'50%',lg:'50%'}} >Condicion ciudadano:</Text>
                            <Text fontWeight={'medium'} display='inline-block' width={{md:'25%',lg:'25%'}}>CIUDADANO</Text>
                        </Box>
                    </SimpleGrid>
                </GridItem>
                <GridItem area={'NombreCiudadano'}>
                    <Box>
                        <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'     width={{md:'25%',lg:'25%'}} >Nombre Ciudadano:</Text>
                        <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'   width={{md:'25%',lg:'25%'}}>Mendieta Piedra Jorge Luis</Text>
                    </Box>
                </GridItem>
                <GridItem area={'lugarNacimiento'}>
                    <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'  width={{md:'25%',lg:'25%'}} >Lugar Nacimiento:</Text>
                    <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Azuay/Cuenca/El Sagrado</Text>

                </GridItem>
                <GridItem area={'fechaNacimientoNacionalidad'}>
                    <SimpleGrid columns={2}>
                        <Box>
                            <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'    width={{md:'50%',lg:'50%'}} >Fecha Nacimiento:</Text>
                            <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' width={{md:'50%',lg:'50%'}}   >28/08/1982</Text>
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
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' width={{md:'50%',lg:'50%'}}   >Masculino</Text>
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'      width={{md:'50%',lg:'50%'}} >Estado Civil:</Text>
                                <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Soltero</Text>
                            </Box>
                        </SimpleGrid>

                </GridItem>
                <GridItem gridArea={'Domicilio'}>
                    <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block' width={{md:'25%',lg:'25%'}} >Domicilio:</Text>
                    <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'   >Pichincha/Quito/Kennedy</Text>
                </GridItem>
                <GridItem area={'CallesNumeroCasa'}>
                    <SimpleGrid columns={2}>
                        <Box>
                            <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block' width={{md:'50%',lg:'50%'}} >Calles:</Text>
                            <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'  width={{md:'50%',lg:'50%'}}   >De las almendras belladonas el</Text>
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
                            <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'    width={{md:'50%',lg:'50%'}} >Instruccion:</Text>
                            <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block'  width={{md:'50%',lg:'50%'}}>Superior</Text>
                        </Box>
                        <Box>
                            <Text fontWeight={'bold'} textTransform={'uppercase'} display='inline-block'   width={{md:'50%',lg:'50%'}} >Profesion:</Text>
                            <Text fontWeight={'medium'} textTransform={'uppercase'} display='inline-block' >Ingeniero</Text>
                        </Box>
                    </SimpleGrid>
                </GridItem>           
                            </>
                        )
                    }
                </Grid>

            </Card>
        </Box>
    )
}

export default FormInformationTranslate 