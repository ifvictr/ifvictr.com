import React from 'react'
import { Box, Flex, Heading, Image, Text } from 'rebass'
import styled from 'styled-components'
import Container from './Container'
import { cx } from '../theme'

const Base = styled(Flex).attrs({ p: 4, pb: 5 })`
    background-image: linear-gradient(
        32deg,
        ${cx('indigo.6')},
        ${cx('violet.4')}
    );
    border-bottom-left-radius: 50% 100px;
    border-bottom-right-radius: 50% 100px;
    left: -30%;
    // left: -45%;
    min-height: 50vh;
    overflow: hidden;
    position: relative;
    text-shadow: rgba(0, 0, 0, 0.376) 0px 1px 2px;
    width: 160%;
    ${({ theme }) => theme.mediaQueries.md} {
        border-bottom-left-radius: 50% 200px;
        border-bottom-right-radius: 50% 200px;
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
})`
    letter-spacing: 2px;
`

const Intro = props => (
    <Base alignItems="center" justifyContent="center" {...props}>
        <Flex alignItems="center">
            <Box mr={3}>
                <Avatar src="https://github.com/ifvictr.png" alt="" />
            </Box>
            <Container maxWidth={32} ml={3}>
                <NameHeading>Victor Truong</NameHeading>
                <Text fontSize={3} color="white">Web developer + designer.</Text>
            </Container>
        </Flex>
    </Base>
)

export default Intro