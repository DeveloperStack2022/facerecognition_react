import {Box} from '@chakra-ui/react'
import Card from 'components/card/Card'
import FormUploadFile from './components/FormUploadFile'
const AgregarFileCsv = () => {
    return (
        <Box pt={{base:'130px',md:'80px',xl:'80px'}}>
            <Card>
                <FormUploadFile  />
            </Card>
        </Box>
    )
}

export default AgregarFileCsv;