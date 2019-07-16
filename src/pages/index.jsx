import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'
// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Skills from '../views/Skills'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const SkillsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Devan.
        </BigTitle>
        <Subtitle>a developer.</Subtitle>
      </Hero>

      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
              <ProjectCard
                title="Remote Note"
                link="http://142.93.22.134:3005"
                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              >
                This is note, reminder, and todo app with SMS integration. So you can just text your notes.
                <br/> <br/>Developed using React, Node, Express, PostgreSQL, Twilio.
            </ProjectCard>
             <ProjectCard
            title="Sidekicks"
            link="https://www.github.com/devanskeem/sidekicks"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            An event planner, organizer, and social media website. 
            <br/> <br/>Developed using React, Node, Express, PostgreSQL, Auth0.
          </ProjectCard>
          <ProjectCard
            title="Chest"
            link="https://www.github.com/devanskeem/chest"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Net worth tracker and investment calculator.
            <br/> <br/>Developed with React, Node, Express
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>

      <Skills offset={2.5}>
        <Title>Skills</Title>
        <SkillsWrapper>
          <SkillCard skill='JavaScript' />
          <SkillCard skill='HTML' />
          <SkillCard skill='CSS' />
          <SkillCard skill='Python' />
          <SkillCard skill='Java' />
          <SkillCard skill='C++' />
          <SkillCard skill='React' />
          <SkillCard skill='Redux' />
          <SkillCard skill='Node' />
          <SkillCard skill='Vue' />
          <SkillCard skill='GraphQL' />
          <SkillCard skill='Express' />
          <SkillCard skill='Relational Database' />
          <SkillCard skill='PostgreSQL' />
          <SkillCard skill='SQL' />
          <SkillCard skill='Git / Github ' />
        </SkillsWrapper>
      </Skills>

      <About offset={3.2}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Devan Skeem" />
          <AboutSub>
            I am a full-stack developer with a passion for learning. There is nothing more satisfying to me than visualising something in my mind, then creating it.
          </AboutSub>
        </AboutHero>
      </About>

      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Email <a href="mailto:devskeem@gmail.com">me</a> or find me on other platforms: {' '}
            <a href="https://www.linkedin.com/in/devanskeem/">LinkedIn</a>{' & '}
            <a href="https://www.github.com/devanskeem/">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          @devanskeem
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
