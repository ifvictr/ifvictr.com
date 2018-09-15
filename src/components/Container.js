import { Box } from 'rebass'
import styled from 'styled-components'

const Container = styled(Box)`
    max-width: ${props => props.maxWidth}rem;
`

Container.defaultProps = {
    maxWidth: 48
}

export default Container