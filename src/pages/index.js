import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Intro from 'components/Intro'
import Layout from 'components/Layout'
import PostCard from 'components/PostCard'
import ProjectCard from 'components/ProjectCard'

const Section = styled(Flex).attrs({ justifyContent: 'center', p: 4 })`
    background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.white},
        ${({ theme }) => theme.colors.snow}
    );
`

const SectionDescription = styled(Box).attrs({
    align: 'right',
    flex: '0 0 15%',
    mr: 3,
    pr: 3,
    width: 1 / 4
})`
    border-right: 2px solid ${({ theme }) => theme.colors.smoke};
`

const SectionHeading = styled(Heading).attrs({
    fontSize: 5,
    fontWeight: 300,
    mb: 2
})`
    box-shadow: inset 0 -4px 0 0 ${({ theme }) => theme.colors.primary};
    display: inline-block;
    text-transform: lowercase;
`

const SectionGrid = styled(Flex.withComponent('ol')).attrs({ flexWrap: 'wrap' })`
    list-style: none;
    margin: ${({ theme }) => -theme.space[2]}px;
    padding: 0;
`

const IndexPage = ({ data }) => (
    <Layout>
        <Intro />
        <Section>
            <Container maxWidth={64}>
                <Flex /* flexDirection={['column', null, 'row']} */>
                    <SectionDescription>
                        <SectionHeading>Projects</SectionHeading>
                        <Text color="muted">
                            A few projects I’ve built/collabed on recently.
                        </Text>
                    </SectionDescription>
                    <SectionGrid>
                        {data.projects.edges
                            .map(({ node }) => node.frontmatter)
                            .map(project => (
                                <ProjectCard data={project} key={project.name} />
                            ))}
                    </SectionGrid>
                </Flex>
            </Container>
        </Section>
        <Section>
            <Container maxWidth={64}>
                <Flex /* flexDirection={['column', null, 'row']} */>
                    <SectionDescription>
                        <SectionHeading>Posts</SectionHeading>
                        <Text color="muted">
                            Writing about anything, really.
                        </Text>
                    </SectionDescription>
                    <SectionGrid>
                        {data.posts.edges
                            .map(({ node }) => node)
                            .slice(0, 6)
                            .map(post => (
                                <PostCard data={post} key={post.id} />
                            ))}
                    </SectionGrid>
                </Flex>
            </Container>
        </Section>
        <Footer />
    </Layout>
)

export default () => (
    <StaticQuery
        query={graphql`
            query {
                posts: allGhostPost(
                    limit: 6
                    sort: { order: DESC, fields: [published_at] }
                ) {
                    edges {
                        node {
                            id
                            title
                            slug
                            html
                            feature_image
                            published_at
                            excerpt
                        }
                    }
                }
                projects: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: { regex: "/(/data/projects)/.*.md$/" }
                    }
                    # limit: 6
                    sort: { order: DESC, fields: [frontmatter___created_at] }
                ) {
                    edges {
                        node {
                            frontmatter {
                                name
                                description
                                color
                                links
                                created_at
                            }
                        }
                    }
                }
            }
        `}
        render={data => <IndexPage data={data} />}
    />
)