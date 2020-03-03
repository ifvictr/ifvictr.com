import React from 'react'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'

const Base = styled(Box).attrs({ color: 'black', p: 4, pb: 5 })``

const Footer = props => (
    <Base align="center" {...props}>
        <Container maxWidth={64}>
            <Flex justifyContent="space-between">
                <Text>© 2020 Victor Truong</Text>
            </Flex>
        </Container>
    </Base>
)

export default Footer
