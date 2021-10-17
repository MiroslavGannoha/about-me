import React from 'react';
import type { NextPage } from 'next';
import NextImg from 'next/image';
import { Input, Link, Section, Card, Textarea, FormGroup } from '../components';
import { Layout } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {
  faComment,
  faEnvelope,
  faFilePdf,
  faFont,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/Button';
import { Chrono } from 'react-chrono';
import { experienceChronoData } from '../dataStorage';

const SkillLogoDesc = ({ desc }: { desc: string }) => (
  <div className="text-xs text-center text-gray-400 mt-2 border-t">{desc}</div>
);

const SkillImageLogo = ({
  title,
  src,
  className,
  width,
  height,
  delay,
}: {
  title: string;
  src: string;
  className?: string;
  width?: string;
  height?: string;
  delay?: number;
}) => (
  <>
    <NextImg
      src={src}
      alt={title}
      width={width || '65px'}
      height={height || '65px'}
      title={title}
      className={`${
        className || ''
      } group-hover:filter-none filter grayscale transition duration-1000 ease-in-out`}
    />
    <SkillLogoDesc desc={title} />
  </>
);

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Section
          id="about"
          className="grid grid-rows-2 grid-flow-col gap-4  bg-pattern"
        >
          <Card className="row-span-2 col-span-1 text-center">
            <NextImg
              className="rounded-full"
              src="/cog.png"
              alt="Miro"
              width="128rem"
              height="128rem"
            />
            <div className="pt-6 space-y-4">
              <figcaption className="flex flex-col gap-1">
                <div className="text-3xl font-medium ">Miroslav Gannoha</div>
                <div className="text-gray-500">Senior Software Engineer</div>
                <div className="">
                  <Link href="https://www.fluxon.com/" className="text-xl">
                    Fluxon
                  </Link>
                </div>
              </figcaption>
              <blockquote>
                <p className="text-lg font-semibold">
                  “Everything is moving forward - people, society, tech, world.
                  In order to keep up and push forward, you got to stay
                  open-minded, learn and evolve all the time, or else you will
                  be left behind.”
                </p>
              </blockquote>
              <div className="text-3xl flex gap-5 justify-center">
                <Link href="mailto:miroslav.gannoha@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link href="https://github.com/MiroslavGannoha">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link href="https://stackoverflow.com/users/2677865/miro">
                  <FontAwesomeIcon icon={faStackOverflow} />
                </Link>
                <Link href="https://github.com/MiroslavGannoha">
                  <FontAwesomeIcon icon={faFilePdf} />
                </Link>
              </div>
            </div>
          </Card>
          <Card className="col-span-2">Hey, I am Miro 👋</Card>
          <Card className="col-span-2">asd</Card>
        </Section>
        <Section id="skills" className="group">
          <h3 className="text-4xl text-center mb-10 group">Skills</h3>
          <ul className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 text-6xl gap-8 justify-items-center mt-6 mb-8 text-gray-600">
            <li className="group">
              <SkillImageLogo
                src="/html5.svg"
                title="HTML5"
                className="contrast-150"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/css3.svg"
                title="CSS3"
                className="contrast-100"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/javascript.svg"
                title="Javascript"
                className="contrast-150"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/nodejs.svg"
                title="NodeJS"
                width="100px"
                className="contrast-150"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/typescript.svg"
                title="Typescript"
                className="contrast-150"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/react.svg"
                title="ReactJS"
                className="contrast-0"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/next.js.svg"
                title="NextJS"
                className="contrast-75"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/mobx.svg"
                title="Mobx"
                className="contrast-150"
              />
            </li>

            <li className="group">
              <SkillImageLogo
                src="/firebase.svg"
                title="Firebase"
                className="contrast-100"
              />
            </li>

            <li className="group">
              <SkillImageLogo src="/emotion.png" title="EmotionJS" />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/tailwind.svg"
                title="TailwindCSS"
                className="contrast-50"
              />
            </li>
          </ul>
          <h4 className="text-2xl text-center">Going to learn:</h4>
          <ul className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 text-6xl gap-8 justify-items-center mt-6 mb-8 text-gray-600">
            <li className="group">
              <SkillImageLogo
                src="/solidity.svg"
                title="Solidity"
                className="contrast-0"
              />
            </li>
            <li className="group">
              <SkillImageLogo
                src="/rust.svg"
                title="Rust"
                className="contrast-0"
              />
            </li>
          </ul>
        </Section>
        <Section id="experience" className="bg-pattern justify-center">
          <h3 className="text-4xl text-center mb-10">Experience</h3>
          <div style={{ height: '850px' }} className="filter grayscale hover:filter-none transition duration-1000 ease-in-out">
            <Chrono mode="VERTICAL"
              theme={{ 
                primary: "rgba(17, 24, 39, var(--tw-bg-opacity))",
                secondary: "rgba(52, 211, 153, var(--tw-bg-opacity))",
                titleColor: "white",
              }}
            >
              <div>
                asd
              </div>
              <div>
                asd 2
              </div>
              </Chrono>
          </div>
        </Section>
        <Section id="contact" className="">
          <h3 className="text-4xl text-center mb-10">Contact</h3>
          <form
            name="Contact form"
            action="https://getform.io/f/e836849c-158a-4068-9bef-db62b40b5d87"
            className="flex gap-4 flex-col px-0 md:px-32 max-w-4xl mx-auto text-lg"
            method="POST"
          >
            <FormGroup icon={faFont}>
              <Input
                type="text"
                name="name"
                id="inputName"
                placeholder="Name"
                required={true}
              />
            </FormGroup>
            <FormGroup icon={faEnvelope}>
              <Input
                type="email"
                name="email"
                id="inputEmail"
                placeholder="Email"
                required={true}
              />
            </FormGroup>
            <Textarea
              name="message"
              id="inputMessage"
              rows={5}
              placeholder="Message"
              required={true}
            />

            <Button type="submit">Send</Button>
          </form>
        </Section>
        <Section className="bg-pattern h-32 flex flex-col justify-center items-center">
          © Miroslav Gannoha
        </Section>
      </Layout>
    </div>
  );
};

export default Home;

//
// background-color: #e5e5f7;
// opacity: 0.8;
// background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
// background-size: 10px 10px;
