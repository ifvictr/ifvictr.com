import React from 'react'
import { Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'
import Layout from 'components/Layout'
import { cx } from 'theme'

const Base = styled(Flex).attrs({ color: 'white', p: 4 })`
    height: 100vh;
    text-shadow: rgba(0, 0, 0, 0.376) 0 1px 2px;
`

const NotFoundPage = () => (
    <Layout>
        <style children={`
            body {
                background-image: linear-gradient(
                    32deg,
                    ${cx('blue.6')},
                    ${cx('indigo.5')},
                    ${cx('violet.4')}
                );
                background-repeat: no-repeat;
                background-size: cover;
                height: 100vh;
            }
        `} />
        <Base alignItems="center" justifyContent="center">
            <Container maxWidth={64}>
                <Heading fontSize={6} mb={2}>Not Found</Heading>
                <Text fontSize={3}>
                    The page you were looking for could not be found.
                </Text>
            </Container>
        </Base>
    </Layout>
)

export default NotFoundPage