import React from 'react';
import type { NextPage } from 'next';
import NextImg from 'next/image';
import { Input, Link, Section, Card, Textarea, FormGroup } from '../components';
import { Layout } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/Button';
import { Chrono } from 'react-chrono';
import { faFilePdf, faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
      className={`${className || ''
        } group-hover:filter-none filter grayscale transition duration-1000 ease-in-out`}
    />
    <SkillLogoDesc desc={title} />
  </>
);

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Section id="profile" className="bg-pattern">
          <div className="max-w-7xl md:grid flex flex-col md:grid-rows-2 md:grid-flow-col gap-4 mx-auto">
            <Card className="md:row-span-2 md:col-span-1 text-center">
              <NextImg
                className="rounded-full"
                src="/photo.jfif"
                alt="Miro"
                width="128rem"
                height="128rem"
                quality="100"
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
                  <p className="text-lg">
                    “Everything is moving forward - people, society, tech,
                    world. In order to keep up and push forward, you got to stay
                    open-minded, learn and evolve all the time, or else you will
                    be left behind.”
                  </p>
                </blockquote>
                <div className="text-3xl flex gap-5 justify-center">
                  <Link href="mailto:miroslav.gannoha@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Link>
                  <Link href="http://miroslav-gannoha.me">
                    <FontAwesomeIcon icon={faChrome} />
                  </Link>
                  <Link href="https://github.com/MiroslavGannoha">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link href="https://stackoverflow.com/users/2677865/miro">
                    <FontAwesomeIcon icon={faStackOverflow} />
                  </Link>
                  <Link href="/miro-cv.pdf">
                    <FontAwesomeIcon icon={faFilePdf} />
                  </Link>
                </div>
              </div>
            </Card>
            <Card className="md:col-span-2 text-xl flex flex-col justify-between">
              <div className="font-semibold mb-4">Hey, I am Miro 👋</div>
              <p>
                I&apos;m a creative, open-minded & responsible senior software
                engineer. Currently working at&nbsp;
                <Link href="https://www.fluxon.com/" className="text-xl">
                  Fluxon
                </Link>
                &nbsp;in the Moonwalk team. I
                have eight years of experience in building web applications.
                I&apos;m quality-driven but can balance between speed & quality
                to meet deadlines. Skills in responsive & cross-browser
                development, designing UI & UX, improving performance, testing,
                mentoring.
              </p>
              <p className="font-semibold text-base mt-4">
                <Link href="/miro-cv.pdf">
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  My Curriculum Vitae (CV)
                </Link>
              </p>
            </Card>
            <div className="md:col-span-2 flex text-lg gap-4 flex-col sm:flex-row">
              <Card>
                <h4 className="font-semibold xl  mb-4">Education</h4>
                <div className="text-base text-gray-400">2005 - 2010</div>
                <div className="font-semibold">
                  BBA: Business And Managerial Economics, Engineering
                </div>
                <div>
                  Kyiv National University Of Technologies & Design - Kyiv
                </div>
              </Card>
              <Card>
                <h4 className="font-semibold xl mb-4">Interests & hobbies</h4>
                <ul className="list-disc ml-4">
                  <li>
                    Technologies, software development, blockchain, geopolitics
                  </li>
                  <li>Gaming, esports, streams</li>
                  <li>Traveling, exploring new locations and cultures</li>
                  <li>
                    Sports activities - bicycling, running, surfing, football,
                    other
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>
        <Section id="skills" className="group">
          <h3 className="text-4xl text-center mb-10 group">Skills</h3>
          <ul className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 text-6xl gap-8 justify-items-center mt-6 mb-8 text-gray-600 max-w-7xl mx-auto">
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/html5.svg"
                title="HTML5"
                className="contrast-150"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/css3.svg"
                title="CSS3"
                className="contrast-100"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/javascript.svg"
                title="Javascript"
                className="contrast-150"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/nodejs.svg"
                title="NodeJS"
                width="100px"
                className="contrast-150"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/typescript.svg"
                title="Typescript"
                className="contrast-150"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/react.svg"
                title="ReactJS"
                className="contrast-0"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/next.js.svg"
                title="NextJS"
                className="contrast-75"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/mobx.svg"
                title="Mobx"
                className="contrast-150"
              />
            </li>

            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/firebase.svg"
                title="Firebase"
                className="contrast-100"
              />
            </li>

            <li className="group hover:animate-pulse">
              <SkillImageLogo src="/emotion.png" title="EmotionJS" />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo
                src="/tailwind.svg"
                title="TailwindCSS"
                className="contrast-50"
              />
            </li>
            <li className="group hover:animate-pulse">
              <SkillImageLogo src="/graphql.svg" title="GraphQL" />
            </li>
          </ul>
        </Section>
        <Section id="experience" className="bg-pattern justify-center">
          <h3 className="text-4xl text-center mb-10">Experience</h3>
          <div
            style={{ height: '740px' }}
            className="filter grayscale hover:filter-none transition duration-1000 ease-in-out max-w-7xl mx-auto"
          >
            <Chrono
              mode="VERTICAL"
              cardHeight={0}
              cardWidth={800}
              theme={{
                primary: 'rgba(17, 24, 39, var(--tw-bg-opacity))',
                secondary: 'rgba(52, 211, 153, var(--tw-bg-opacity))',
                titleColor: 'white',
              }}
              items={[
                { title: 'Oct 2020 - Current' },
                { title: 'Aug 2017 - May 2020' },
                { title: 'Feb 2014 - Mar 2017' },
                { title: 'Apr 2013 - Feb 2014' },
                { title: 'Feb 2012 - Apr 2013' },
              ]}
            >
              <div className="text-base w-full p-4">
                <div className="font-semibold">Senior Software Engineer</div>
                <div>Fluxon, San Francisco, California, US (REMOTE)</div>
              </div>
              <div className="text-base w-full p-4">
                <div className="font-semibold">Senior Software Engineer</div>
                <div>Invictus Gurus, Dallas, Texas, US (REMOTE)</div>
              </div>
              <div className="text-base w-full p-4">
                <div className="font-semibold">Software Engineer</div>
                <div>Epam, Kyiv, Ukraine </div>
              </div>
              <div className="text-base w-full p-4">
                <div className="font-semibold">Junior Software Developer</div>
                <div>Anotheria Solutions, Kyiv, Ukraine </div>
              </div>
              <div className="text-base w-full p-4">
                <div className="font-semibold">Junior Software Developer</div>
                <div>Webbylab, Kyiv, Ukraine</div>
              </div>
            </Chrono>
          </div>
        </Section>
        <Section id="contact" className="">
          <h3 className="text-4xl text-center mb-10">Contact</h3>
          <form
            name="Contact form"
            action="https://getform.io/f/e836849c-158a-4068-9bef-db62b40b5d87"
            className="flex gap-4 flex-col px-0 md:px-32 max-w-7xl mx-auto text-lg"
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
