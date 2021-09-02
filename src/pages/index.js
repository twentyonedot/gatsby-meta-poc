import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/Seo/index';

const IndexPage = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    head.setAttribute('prefix', 'og: http://ogp.me/ns#');
  }, []);
  return (
    <main>
      <Seo
        title="MetaTest1"
        image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        type="article"
      />
      Home
      <Link to="/metatest1">Meta Test1</Link>
      <Link to="/metatest2">Meta Test2</Link>
    </main>
  );
};

export default IndexPage;
