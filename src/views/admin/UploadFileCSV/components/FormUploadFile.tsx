import {useRef} from 'react'
import {Flex,useColorModeValue,Icon,Text,Button} from '@chakra-ui/react'
import Dropzone,{IInputProps,IUploadParams,IFileWithMeta,ILayoutProps,ISubmitButtonProps } from 'react-dropzone-uploader'
import {FiUploadCloud} from 'react-icons/fi'
import PreviewComponent from './PreviewFolderUpload'


const LayoutComponent = ({dropzoneProps,files,submitButton,extra:{maxFiles},input,previews}:ILayoutProps) => {
  return (
    <>
      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
      {previews}
      {submitButton}
    </>
  )
}

// TODO: Component Button Submit 
const SubmitButton = ({content,onSubmit,files}:ISubmitButtonProps) => {
  const handleSubmit = () => onSubmit(files.filter(f => ['headers_received', 'done'].includes(f.meta.status)));
  return  (
    <Button variant={'brand'} ml='auto' onClick={handleSubmit} borderRadius="md" disabled={files.length > 0 ? false : true}>{content}</Button> 
  )
}


//TODO: Initalize component
const FormUploadFile = () => {
    //TODO: Hook Ref - React 
    const InputRef = useRef(null)
    //TODO: Hook Chakra Ui - useColorModeValue()
    const bg = useColorModeValue('gray.100','navy.700');
    const borderColor = useColorModeValue('secondaryGray.100','whiteAlpha.100');
    const brandColor = useColorModeValue("brand.500", "white");
    //TODO: DropZone - react-dropzone-uploader
    
    const handleClick = () => InputRef.current.click()

    const InputElement = ({ onFiles, getFilesFromEvent }: IInputProps) => {
        return (
          <>
            <Flex onClick={handleClick}  align={'center'} justify='center' direction={'column'} border={'2.5px dashed'} bg={bg} borderColor={borderColor} borderRadius='16px' w="100%" h='max-content' minH='100%' p='5' cursor={'pointer'} overflow='hidden' mb='2'>
                <Icon as={FiUploadCloud} w='80px' h='80px' color={brandColor} />
                <Text  fontSize="2xl" fontWeight="bold" color={brandColor} textAlign={'center'}> Subir carpeta </Text> 
                <Text  fontSize="md" fontWeight="500" color={brandColor} opacity='.5' textAlign={'center'}>Selecionar carpeta que contenga archivo .csv y sus imagenes</Text> 
            </Flex>
            <input  type="file" hidden ref={(el) =>  InputRef.current = el } 
            onChange={async e => {
              const chosenFiles = await getFilesFromEvent(e)
              onFiles(chosenFiles as File[])
            }}
            multiple />
          </>
        )
    }
    
    const GetUploadCustom = ({meta,file}:IFileWithMeta): IUploadParams => {

      const body = new FormData()
      body.append('file',file)
      
      return {url:'http://localhost:8000/api/v0.1/folderUpload/folderUpload',method:'POST',body}
    }

    const handleSubmit = (files:IFileWithMeta[],allFiles:IFileWithMeta[]) => allFiles.forEach(f => f.remove());

    return (
        <Dropzone
          LayoutComponent={LayoutComponent}
          accept='.csv,image/*' 
          getUploadParams={GetUploadCustom}
          InputComponent={InputElement}
          PreviewComponent={PreviewComponent}
          SubmitButtonComponent={SubmitButton}
          submitButtonContent={'Enviar'}
          onSubmit={handleSubmit}
        />
    )
}
export default FormUploadFile;