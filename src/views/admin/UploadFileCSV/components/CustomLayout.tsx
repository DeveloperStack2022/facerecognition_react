import {ILayoutProps} from 'react-dropzone-uploader'
import {Box} from '@chakra-ui/react'
import CustomInputComponent from './CustomInput'

const CustomLayouts = ({submitButton,files,previews,extra:{maxFiles}}:ILayoutProps) => {
    
    return (
        <Box>
           
            {previews}
            {files.length > 0 && submitButton}
        </Box>
    )
}

export default CustomLayouts;