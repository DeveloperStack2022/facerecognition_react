import {Box} from '@chakra-ui/react'
import Card from 'components/card/Card'
import MultiFileUpload from './components/FormUploadFiles'



const AgregarFileCsv = () => {
    return (
        <Box pt={{base:'130px',md:'80px',xl:'80px'}}>
            <Card>
                <MultiFileUpload  />
            </Card>
        </Box>
    )
}

export default AgregarFileCsv;