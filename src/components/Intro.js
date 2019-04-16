import React from 'react'
import { FaDollarSign, FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Box, Flex, Heading, Image, Link, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'
import { cx } from 'theme'

const Base = styled(Flex).attrs({ color: 'white', p: 4, pb: 5 })`
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

const Avatar = styled(Image).attrs({ width: 200 })`
    border-radius: ${({ theme }) => theme.pill};
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
`

const Services = styled(Flex)`
    a {
        line-height: 0;
    }
    svg {
        fill: currentColor;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.376));
        height: 24px;
        transition: fill ${({ theme }) => theme.transition};
        width: 24px;
        will-change: fill;
    }

    svg:hover {
        fill: ${({ theme }) => theme.colors.smoke};
    }
`

const Service = ({ href, icon: Icon, ...props }) => (
    <Link
        target="_blank"
        rel="noopener"
        href={href}
        mr={3}
        children={<Icon />}
        {...props}
    />
)

const Separator = styled(Box).attrs({ mr: 2, children: '·' })``

const Intro = props => (
    <Base alignItems="center" justifyContent="center" {...props}>
        <Container maxWidth={64} width={1} style={{ zIndex: 1 }}>
            <Flex alignItems="center">
                <Box mr={3}>
                    <Avatar src="https://gravatar.com/avatar/82c79c6a2c438c0d9c113cc543012db3?s=200" alt="Victor Truong" />
                </Box>
                <Container maxWidth={32} ml={3}>
                    <Heading fontSize={6}>Victor Truong</Heading>
                    <Heading fontSize={3} mb={2}>@ifvictr</Heading>
                    <Text fontSize={3} mb={3}>
                        Software developer, startup enthusiast, & neophiliac. Always building.
                    </Text>
                    <Services>
                        <Service href="https://github.com/ifvictr" icon={FaGithub} />
                        <Service href="https://linkedin.com/in/ifvictr" icon={FaLinkedinIn} />
                        <Service href="https://twitter.com/ifvictr2" icon={FaTwitter} />
                        <Separator />
                        <Service href="https://paypal.me/ifvictr" icon={FaDollarSign} />
                        <Service href="mailto:me@ifvictr.com" icon={FaEnvelope} />
                    </Services>
                </Container>
            </Flex>
        </Container>
    </Base>
)

export default Intro
