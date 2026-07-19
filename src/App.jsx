import { useState, useCallback } from 'react';
import './index.css';
import Loader from './components/Loader';
import EnvelopeScreen from './components/EnvelopeScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Events from './components/Events';
import Traditions from './components/Traditions';
import Gallery from './components/Gallery';
import Family from './components/Family';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import Blessings from './components/Blessings';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [envelopeDismissed, setEnvelopeDismissed] = useState(false);
  const [heroAnimate, setHeroAnimate] = useState(false);

  const handleLoaderHide = useCallback(() => {
    document.getElementById('loader').classList.add('hide');
    setLoaderDone(true);
  }, []);

  const handleOpen = useCallback(() => {
    const env = document.getElementById('envelope-screen');
    env.classList.add('dismiss');
    setEnvelopeDismissed(true);
    setHeroAnimate(true);
  }, []);

  return (
    <>
      <Loader onHide={handleLoaderHide} />
      {loaderDone && !envelopeDismissed && <EnvelopeScreen onOpen={handleOpen} />}
      <Navbar />
      <Hero animate={heroAnimate} />
      <Story />
      <Events />
      <Traditions />
      <Gallery />
      <Family />
      <Venue />
      <RSVP />
      <Blessings />
      <Footer />
      <MusicToggle />
    </>
  );
}
