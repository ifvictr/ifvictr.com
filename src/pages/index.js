import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import ProjectCard from '../components/ProjectCard'

const Projects = styled(Flex).attrs({ justifyContent: 'center', mt: -6, p: 4, pt: 6 })`
    background-image: radial-gradient(${({ theme }) => theme.colors.smoke} 1px, transparent 1px);
    background-size: 16px 16px;
`

const Posts = styled(Flex).attrs({ justifyContent: 'center', p: 4 })`
    background-image:
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='15' x2='100%25' y2='15' stroke='%23ecf5fa'/%3E%3C/svg%3E"),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath stroke='%23faeef0' d='M15 0v16'/%3E%3C/svg%3E");
    background-size: 100vw 1.5em, 32px 32px;
    background-repeat: repeat, repeat-y;
    background-position: 0 0, 64px 0;
`

const SectionDescription = styled(Box).attrs({ align: 'right', mr: 3, pr: 3, width: 1 / 4 })`
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
        <Projects>
            <Container maxWidth={64}>
                <Flex /* flexDirection={['column', null, 'row']} */>
                    <SectionDescription>
                        <SectionHeading>Projects</SectionHeading>
                        <Text color="muted">A few of the projects I’ve worked on recently.</Text>
                    </SectionDescription>
                    <SectionGrid>
                        {data.projects.edges.map(({ node }) => node.frontmatter).map(project => (
                            <ProjectCard data={project} key={project.name} />
                        ))}
                    </SectionGrid>
                </Flex>
            </Container>
        </Projects>
        <Posts>
            <Container maxWidth={64}>
                <Flex /* flexDirection={['column', null, 'row']} */>
                    <SectionDescription>
                        <SectionHeading>Posts</SectionHeading>
                        <Text color="muted">Writing on just about anything, really.</Text>
                    </SectionDescription>
                    <SectionGrid>
                        {data.posts.edges
                            .map(({ node }) => node.frontmatter)
                            .filter(post => post.published_at)
                            .slice(0, 6)
                            .map(post => (
                                <PostCard data={post} key={post.slug} />
                            ))}
                    </SectionGrid>
                </Flex>
            </Container>
        </Posts>
        <Footer />
    </Layout>
)

export default () => (
    <StaticQuery
        query={graphql`
            query {
                posts: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: { regex: "/(/data/posts)/.*.md$/" }
                    }
                    sort: {
                        fields: [frontmatter___created_at], order: DESC
                    }
                ) {
                    edges {
                        node {
                            html
                            frontmatter {
                                name
                                slug
                                featured_image_url
                                created_at
                                published_at
                            }
                        }
                    }
                }
                projects: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: { regex: "/(/data/projects)/.*.md$/" }
                    }
                    limit: 6
                    sort: {
                        fields: [frontmatter___created_at], order: DESC
                    }
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