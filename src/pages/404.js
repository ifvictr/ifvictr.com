import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'
import Layout from 'components/Layout'

const Base = styled(Flex).attrs({ p: 4 })`
    height: 100vh;
`

const NotFoundPage = () => (
    <Layout>
        <Helmet title="Not Found" />
        <Base alignItems="center" justifyContent="center">
            <Container maxWidth={64}>
                <Heading fontSize={6} mb={2}>Not Found</Heading>
                <Text color="muted" fontSize={3}>
                    The page you were looking for could not be found.
                </Text>
            </Container>
        </Base>
    </Layout>
)

export default NotFoundPage