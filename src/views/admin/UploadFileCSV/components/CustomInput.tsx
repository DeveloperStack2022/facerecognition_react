import {useRef} from 'react'
import {Flex,Icon,Text,useColorModeValue} from '@chakra-ui/react'
import {IInputProps} from 'react-dropzone-uploader'
import {FiUploadCloud} from 'react-icons/fi'

const InputCustom = ({accept,getFilesFromEvent,onFiles}:IInputProps) => {
    const InputRef = useRef(null)
    //TODO: Hook Chakra Ui - useColorModeValue()
    const bg = useColorModeValue('gray.100','navy.700');
    const borderColor = useColorModeValue('secondaryGray.100','whiteAlpha.100');
    const brandColor = useColorModeValue("brand.500", "white");
    const handleClick = () => InputRef.current.click()
    return (
        <Flex onClick={handleClick}  align={'center'} justify='center' direction={'column'} border={'2.5px dashed'} bg={bg} borderColor={borderColor} borderRadius='16px' w="100%" h='max-content' minH='100%' p='5' cursor={'pointer'} overflow='hidden' >
                <Icon as={FiUploadCloud} w='80px' h='80px' color={brandColor} />
                <Text  fontSize="2xl" fontWeight="bold" color={brandColor} textAlign={'center'}> Subir carpeta </Text> 
                <Text  fontSize="md" fontWeight="500" color={brandColor} opacity='.5' textAlign={'center'}>Selecionar carpeta que contenga archivo .csv y sus imagenes</Text> 
                {/* @ts-expect-error */}
                <input directory="" webkitdirectory="" type="file" hidden ref={(el) => {  
                        InputRef.current = el;
                    }} 
                    onChange={async e => {
                        const chosenFiles = await getFilesFromEvent(e)
                        onFiles(chosenFiles as File[])
                    }}
                />
            </Flex>
            
    )
}

export default InputCustom;