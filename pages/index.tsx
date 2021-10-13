import React from 'react';
import type { NextPage } from 'next';
import NextImg from 'next/image';
import { Link, Section } from '../components';
import { Layout } from '../layout';
import { Card } from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Section id="about" className="grid grid-rows-2 grid-flow-col gap-4">
          <Card className="row-span-2 col-span-1">
            <NextImg
              className="rounded-full"
              src="/cog.png"
              alt="Miro"
              width="128rem"
              height="128rem"
            />
            <div className="pt-6 space-y-4">
              <figcaption className="flex flex-col gap-1">
                <div className="text-2xl font-medium">Miroslav Gannoha</div>
                <div className="text-gray-500">Senior Software Engineer</div>
                <div className="">
                  <Link href="https://www.fluxon.com/">Fluxon</Link>
                </div>
              </figcaption>
              <blockquote>
                <p className="text-lg font-semibold">
                  “Everything is moving forward - people, society, tech, world.
                  You got to learn and evolve all the time or else you will be
                  left behind.”
                </p>
              </blockquote>
              <div className="text-3xl flex gap-4 justify-center">
                <Link href="mailto:miroslav.gannoha@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link href="https://github.com/MiroslavGannoha">
                  <FontAwesomeIcon icon={faGithub} />
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
        <Section id="contact">
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1
        </Section>
        <Section id="cv">
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1 Section 1 Section 1 Section 1 Section 1 Section 1
          Section 1 Section 1
        </Section>
        <Section className="h-32 flex flex-col justify-center items-center">
          © Miroslav Gannoha
        </Section>
      </Layout>
    </div>
  );
};

export default Home;
