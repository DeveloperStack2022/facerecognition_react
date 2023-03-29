import {Progress,Flex,Text,Box,useColorModeValue} from '@chakra-ui/react'
import {IPreviewProps} from 'react-dropzone-uploader';
//Custom components 
import IconComponent from './IconStatus'

//TODO: React icons 
import {AiOutlineCheckCircle} from  'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'

import {IoImageOutline} from 'react-icons/io5'


const PreviewLoadFolder = ({meta}:IPreviewProps) => {
    //TODO: Props
    const { name, percent, status } = meta;
    // TODO: Color mode value - hook @chakra ui 
    const success = useColorModeValue('green.400','white');
    const colorsIcons = useColorModeValue('gray.600','white')
    //TODO: Render component 
    return <Flex direction={'column'} justify='center'>
        <Box display={'flex'} justifyContent='space-between' >
            <Box display={'flex'} mb='2'>
                <IconComponent as={ name.toLowerCase().split('.').pop() == 'png' ? IoImageOutline  : HiOutlineDocumentText} w='30px' h='30px' color={colorsIcons} mr='2' />
                <Text fontWeight={'medium'} fontSize='md' >{name.toLowerCase()} </Text>
            </Box>
            {status == 'done' ? <IconComponent w='20px' h='20px' as={AiOutlineCheckCircle} color={success} /> : null }
        </Box>
        <Progress h='2' width={'100%'} mb='2' value={percent} size='xs' variant='table' isAnimated={true} colorScheme='brand' />
    </Flex>
}

export default PreviewLoadFolder;
