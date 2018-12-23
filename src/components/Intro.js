import React from 'react'
import { Box, Flex, Heading, Image, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'
import { cx } from 'theme'

const Base = styled(Flex).attrs({ p: 4, pb: 5 })`
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.376));
    min-height: 50vh;
    position: relative;
    text-shadow: rgba(0, 0, 0, 0.376) 0 1px 2px;
    &:before {
        background-image: linear-gradient(
            32deg,
            ${cx('blue.6')},
            ${cx('indigo.5')},
            ${cx('violet.4')}
        );
        border-bottom-left-radius: 50% 100px;
        border-bottom-right-radius: 50% 100px;
        content: '';
        display: block;
        height: 100%;
        left: -50%;
        position: absolute;
        width: 160%;
        ${({ theme }) => theme.mediaQueries.md} {
            border-bottom-left-radius: 50% 200px;
            border-bottom-right-radius: 50% 200px;
        }
    }
`

const Avatar = styled(Image).attrs({ width: 160 })`
    border-radius: ${({ theme }) => theme.pill};
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
    transition: transform ${({ theme }) => theme.transition};
    will-change: transform;
    &:hover {
        transform: scale(1.05);
    }
`

const NameHeading = styled(Heading).attrs({
    color: 'white',
    fontSize: 6,
    fontWeight: 300,
    mb: 1
})``

const Intro = props => (
    <Base alignItems="center" justifyContent="center" {...props}>
        <Container maxWidth={64} width={1} style={{ zIndex: 1 }}>
            <Flex alignItems="center">
                <Box mr={3}>
                    <Avatar src="https://github.com/ifvictr.png" alt="" />
                </Box>
                <Container maxWidth={32} ml={3}>
                    <NameHeading>Victor Truong</NameHeading>
                    <Text fontSize={3} color="white">Web developer + designer.</Text>
                </Container>
            </Flex>
        </Container>
    </Base>
)

export default Intro