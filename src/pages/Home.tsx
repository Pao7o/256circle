import React from 'react';
import Hero from '../components/Hero';
import VisionCircle from '../components/VisionCircle';
import ValueProposition from '../components/ValueProposition';
import ServiceHighlights from '../components/ServiceHighlights';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <VisionCircle />
      <ValueProposition />
    </>
  );
}