import React from 'react'
import { Card, Flex, Heading, Link, Text } from 'rebass'
import styled from 'styled-components'

const Base = styled(Flex.withComponent('li'))`
    padding: ${({ theme }) => theme.space[2]}px;
    width: 50%;
`

const Inner = styled(Card.withComponent(Flex).withComponent(Link)).attrs({
    bg: 'white',
    flex: 1,
    flexDirection: 'column',
    p: 3
})`
    box-shadow: ${({ theme }) => theme.boxShadows[0]};
    position: relative;
    // text-shadow: rgba(0, 0, 0, 0.376) 0 1px 2px;
    transition: box-shadow ${({ theme }) => theme.transition}, transform ${({ theme }) => theme.transition};
    will-change: box-shadow, transform;
    width: 100%;
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadows[1]};
        transform: scale(1.025);
    }
`

const ProjectName = styled(Heading).attrs({ fontSize: 4 })``

const ProjectCard = ({ data, ...props }) => (
    <Base {...props}>
        <Inner href={data.project_url} target="_blank">
            <ProjectName color="slate" mb={2}>{data.name}</ProjectName>
            <Text color="slate">{data.description}</Text>
        </Inner>
    </Base>
)

export default ProjectCard
