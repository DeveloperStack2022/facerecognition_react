import {IconProps,Icon} from '@chakra-ui/react'
import {forwardRef} from '@chakra-ui/system'

const IconComponent = forwardRef<IconProps,'svg'>((props,ref) => {
    const {as,color,...rest} = props
    return(
        <Icon as={as}  color={color} {...rest} />
    )
})

export default IconComponent;