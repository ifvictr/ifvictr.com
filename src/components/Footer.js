import React from 'react'
import { Box, Flex, Link, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'

const Base = styled(Box).attrs({ bg: 'snow', p: 4, pb: 5 })``

const Footer = props => (
    <Base align="center" {...props}>
        <Container maxWidth={64}>
            <Flex justifyContent="space-between">
                <Text>© 2014-2018 Victor Truong</Text>
                <Link href="https://github.com/ifvictr/ifvictr.com" target="_blank" color="info">
                    View source code
                </Link>
            </Flex>
        </Container>
    </Base>
)

export default Footer