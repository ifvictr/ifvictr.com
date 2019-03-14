// import { Link } from 'gatsby'
import React from 'react'
import { Card, Flex, Heading, Link, Text } from 'rebass'
import styled from 'styled-components'

import { palette } from 'theme'

const Base = styled(Flex.withComponent('li'))`
    min-height: 8rem;
    padding: ${({ theme }) => theme.space[2]}px;
    width: 33.333333%;
`

const Inner = styled(Card.withComponent(Flex).withComponent(Link)).attrs({
    flex: 1,
    flexDirection: 'column',
    p: 3
})`
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
    position: relative;
    text-shadow: rgba(0, 0, 0, 0.376) 0 1px 2px;
    transition: transform ${({ theme }) => theme.transition};
    will-change: transform;
    width: 100%;
    &:hover {
        transform: scale(1.025);
    }
`

const PostName = styled(Heading).attrs({ color: 'white', fontSize: 4 })``

const key = value => value.split('')
    .reduce((total, letter) => total + letter.charCodeAt(0), 0)

const color = value => {
    const paletteKeys = Object.keys(palette)
    return palette[paletteKeys[key(value) % paletteKeys.length]]
}

const prettyTimestamp = timestamp => {
    const date = new Date(timestamp)
    return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`
}

const PostCard = ({ data, ...props }) => {
    const base = color(data.slug)
    return (
        <Base {...props}>
            <Inner
                to={`https://blog.ifvictr.com/${data.slug}`}
                style={{
                    backgroundImage: `linear-gradient(
                        24deg,
                        ${base[7]},
                        ${base[5]},
                        ${base[3]}
                    )`
                }}
            >
                <Text color="white" mb={1}>{prettyTimestamp(data.published_at)}</Text>
                <PostName>{data.name}</PostName>
            </Inner>
        </Base>
    )
}

export default PostCard
