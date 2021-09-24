import React from 'react'
import type { NextPage } from 'next';
import { Link } from '../components/Link';

const Home: NextPage = () => {
  return (
    <div>
      Hello, my name is Miroslav
      <Link href="/">Show Home</Link>
      <Link href="/cv">Show CV</Link>
      <Link href="/blog">Show BLOG</Link>
      <Link href="/portfolio">Portfolio</Link>
    </div>
  );
}

export default Home
