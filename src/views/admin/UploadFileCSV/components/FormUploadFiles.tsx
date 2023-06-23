import React,{useState} from 'react'
import {Flex,Text,Button,useColorModeValue,Icon} from '@chakra-ui/react'

// TODO: Hooks de chakraUi 
import {useToast} from '@chakra-ui/react'
import {useDropzone} from 'react-dropzone'
// TODO: Icons 
import {FiUploadCloud} from 'react-icons/fi'
const URL = process.env.REACT_APP_API_BACKEND_URL


const FormUploadMultiFiles = () => {
    // TODO: States
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [loadingSubmit, updateLoading] = useState<boolean>(false)

    const onDrop = (acceptedFiles: File[]) => {
        setSelectedFiles(acceptedFiles);
    };
    const { getRootProps, getInputProps} = useDropzone({ onDrop });
    const toast = useToast()

    //TODO: Hook Chakra Ui - useColorModeValue()
    const bg = useColorModeValue('gray.100','navy.700');
    const borderColor = useColorModeValue('secondaryGray.100','whiteAlpha.100');
    const brandColor = useColorModeValue("brand.500", "white");

    const uploadFiles = async () => {
        
        updateLoading(prev => !prev)
        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
          formData.append(`files`, file);
        });
    
        await fetch(`${URL}/folderUpload/folderUploads`,{
            method:'POST',
            headers:{
                Accept: 'application/json',
            },
            body:formData
        })
        updateLoading(prev => !prev)
        toast({
            isClosable:true,
            status:'success',
            position:'bottom',
            title:'Correcto',
            variant:'left-accent',
            description:'Archivos subidos correctamente'
        })
        await fetch(`${URL}/folderUpload/createUsersToFolderFields`)
      };
    return (
        <>
            <Flex align={'center'} justify='center' direction={'column'} border={'2.5px dashed'}  borderRadius='16px' w="100%" h='max-content' minH='100%' p='5' cursor={'pointer'} overflow='hidden' mb='2' bg={bg} borderColor={borderColor} {...getRootProps({className:'dropzone'})}>
                <input  {...getInputProps()} />
                <Icon as={FiUploadCloud} w='80px' h='80px' color={brandColor} />
                <Text fontSize="2xl" fontWeight="bold" textAlign={'center'} color={brandColor} > Subir carpeta </Text> 
                <Text  fontSize="md" fontWeight="500" color={brandColor} opacity='.5' textAlign={'center'}>Selecionar imagenes en formato .jpg y el archivo .csv</Text> 
            </Flex>
            <Button variant={'brand'} ml='auto' onClick={uploadFiles} borderRadius="md" disabled={selectedFiles.length > 0 ? false : true} isLoading={loadingSubmit} >Enviar</Button>
        </>
    )
}

export default FormUploadMultiFiles