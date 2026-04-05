import { useState, useEffect, useCallback } from 'react';
import Carousel from '../components/Carousel';
import PageHero from '../components/PageHero';

const projects = [
  // ── Residential ────────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'Residential',
    title: 'Umhlanga Sunsynk System',
    caption: 'Complete SunSynk hybrid inverter installation with PV combiner boxes, battery storage, and full DB distribution for a premium coastal residence.',
    image: '/images/gallery/umhanga/UM1.jpg',
    images: [
      '/images/gallery/umhanga/UM1.jpg',
      '/images/gallery/umhanga/Um2.jpg',
      '/images/gallery/umhanga/Um3.jpg',
      '/images/gallery/umhanga/Um4.jpg',
      '/images/gallery/umhanga/Um5.jpg',
      '/images/gallery/umhanga/Um7.jpg',
      '/images/gallery/umhanga/um6.jpg'
    ],
    location: 'Umhlanga, KZN',
  },
  {
    id: 2,
    category: 'Residential',
    title: 'Durban Residential',
    caption: 'Premium residential solar and battery installation delivering reliable energy independence for a Durban home.',
    image: '/images/gallery/durban/PHOTO-2026-03-30-20-21-41 2.jpg',
    images: [
      '/images/gallery/durban/PHOTO-2026-03-30-20-21-41 2.jpg',
      '/images/gallery/durban/PHOTO-2026-03-30-20-21-41.jpg',
      '/images/gallery/durban/PHOTO-2026-03-30-20-21-42.jpg',
      '/images/gallery/durban/PHOTO-2026-03-30-20-21-43 2.jpg',
      '/images/gallery/durban/PHOTO-2026-03-30-20-21-43.jpg'
    ],
    location: 'Durban, KZN',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Chatsworth Installation',
    caption: 'Successful solar inverter and high-efficiency rooftop panel installation with outstanding results.',
    image: '/images/gallery/chatsworth/PHOTO-2026-03-30-20-23-22.jpg',
    images: [
      '/images/gallery/chatsworth/PHOTO-2026-03-30-20-23-22.jpg',
      '/images/gallery/chatsworth/PHOTO-2026-03-30-20-23-23 2.jpg',
      '/images/gallery/chatsworth/PHOTO-2026-03-30-20-23-23.jpg',
      '/images/gallery/chatsworth/PHOTO-2026-03-30-20-23-24 2.jpg',
      '/images/gallery/chatsworth/PHOTO-2026-03-30-20-23-24 3.jpg',
      '/images/gallery/chatsworth/PHOTO-2026-03-30-20-23-24.jpg'
    ],
    location: 'Chatsworth, KZN',
  },
  {
    id: 4,
    category: 'Residential',
    title: 'Lanseria Estate Hub',
    caption: 'Premium solar and battery integration for large-scale energy demands in a luxury estate environment.',
    image: '/images/gallery/lanseria/PHOTO-2026-03-30-20-26-35 2.jpg',
    images: [
      '/images/gallery/lanseria/PHOTO-2026-03-30-20-26-35 2.jpg',
      '/images/gallery/lanseria/PHOTO-2026-03-30-20-26-35.jpg',
      '/images/gallery/lanseria/PHOTO-2026-03-30-20-26-36 2.jpg',
      '/images/gallery/lanseria/PHOTO-2026-03-30-20-26-36.jpg'
    ],
    location: 'Lanseria, GP',
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Edenvale Huawei LUNA',
    caption: 'Premium Huawei LUNA2000 smart string battery system (15kWh) with professional DB board distribution.',
    image: '/images/gallery/huwai-edenvale/edenvale-1.jpg',
    images: [
      '/images/gallery/huwai-edenvale/edenvale-1.jpg',
      '/images/gallery/huwai-edenvale/edenvale-2.jpg',
      '/images/gallery/huwai-edenvale/edenvale-3.jpg'
    ],
    location: 'Edenvale, GP',
  },
  {
    id: 6,
    category: 'Residential',
    title: 'Edenvale Solar System',
    caption: 'Robust solar system installation delivering full home energy independence and load-shedding protection.',
    image: '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-36 2.jpg',
    images: [
      '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-36 2.jpg',
      '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-36.jpg',
      '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-37 2.jpg',
      '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-37.jpg',
      '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-38 2.jpg',
      '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-38.jpg',
      '/images/gallery/edenvale/PHOTO-2026-03-30-20-33-39.jpg'
    ],
    location: 'Edenvale, GP',
  },
  {
    id: 7,
    category: 'Residential',
    title: 'Solar Edenvale',
    caption: 'High-efficiency solar PV system with smart monitoring for a modern Edenvale residence.',
    image: '/images/gallery/solar-edenvale/PHOTO-2026-03-30-20-54-41 2.jpg',
    images: [
      '/images/gallery/solar-edenvale/PHOTO-2026-03-30-20-54-41 2.jpg',
      '/images/gallery/solar-edenvale/PHOTO-2026-03-30-20-54-41 3.jpg',
      '/images/gallery/solar-edenvale/PHOTO-2026-03-30-20-54-41.jpg',
      '/images/gallery/solar-edenvale/PHOTO-2026-03-30-20-54-42 2.jpg',
      '/images/gallery/solar-edenvale/PHOTO-2026-03-30-20-54-42.jpg'
    ],
    location: 'Edenvale, GP',
  },
  {
    id: 8,
    category: 'Residential',
    title: 'Alberton Luxpower',
    caption: 'Luxpower hybrid inverter paired with lithium storage for consistent uptime during load-shedding.',
    image: '/images/gallery/alberton/PHOTO-2026-03-30-20-35-05 2.jpg',
    images: [
      '/images/gallery/alberton/PHOTO-2026-03-30-20-35-05 2.jpg',
      '/images/gallery/alberton/PHOTO-2026-03-30-20-35-05.jpg',
      '/images/gallery/alberton/PHOTO-2026-03-30-20-35-06 2.jpg',
      '/images/gallery/alberton/PHOTO-2026-03-30-20-35-06.jpg'
    ],
    location: 'Alberton, GP',
  },
  {
    id: 9,
    category: 'Residential',
    title: 'Hail Damage Restoration',
    caption: 'Professional assessment and replacement of solar panels post-hail, restoring full system output.',
    image: '/images/gallery/repairs-to-hail-damage/PHOTO-2026-03-30-20-30-08.jpg',
    images: [
      '/images/gallery/repairs-to-hail-damage/PHOTO-2026-03-30-20-30-08.jpg',
      '/images/gallery/repairs-to-hail-damage/PHOTO-2026-03-30-20-30-09.jpg',
      '/images/gallery/repairs-to-hail-damage/PHOTO-2026-03-30-20-30-10 2.jpg',
      '/images/gallery/repairs-to-hail-damage/PHOTO-2026-03-30-20-30-10 3.jpg',
      '/images/gallery/repairs-to-hail-damage/PHOTO-2026-03-30-20-30-10.jpg',
      '/images/gallery/repairs-to-hail-damage/PHOTO-2026-03-30-20-30-11.jpg'
    ],
    location: 'Pretoria, GP',
  },
  // ── Battery ────────────────────────────────────────────────────────────────
  {
    id: 10,
    category: 'Battery',
    title: 'Moreleta Park Battery System',
    caption: 'Custom battery storage installation providing reliable backup power for a Moreleta Park residence.',
    image: '/images/gallery/moleta-park/115b816b-4cd6-4cac-8792-7bf9e77232c7.JPG',
    images: [
      '/images/gallery/moleta-park/115b816b-4cd6-4cac-8792-7bf9e77232c7.JPG',
      '/images/gallery/moleta-park/54c02e04-2946-4c7a-8f12-72d3af240984.JPG',
      '/images/gallery/moleta-park/5bc35507-d1eb-44d5-8325-0c23e8a562b6.JPG',
      '/images/gallery/moleta-park/949f9e40-4aab-47ee-a2db-23c501eee922.JPG',
      '/images/gallery/moleta-park/fcb295f9-b439-4fc4-b8f5-5a7cf2bf3a3b.JPG'
    ],
    location: 'Moreleta Park, GP',
  },
  {
    id: 11,
    category: 'Battery',
    title: 'Moreleta Park 2 — Energy Storage',
    caption: 'Second-phase battery storage expansion delivering increased capacity and load-shedding resilience.',
    image: '/images/gallery/morleta-park-2/PHOTO-2026-03-30-20-32-31 2.jpg',
    images: [
      '/images/gallery/morleta-park-2/PHOTO-2026-03-30-20-32-31 2.jpg',
      '/images/gallery/morleta-park-2/PHOTO-2026-03-30-20-32-31 3.jpg',
      '/images/gallery/morleta-park-2/PHOTO-2026-03-30-20-32-31.jpg',
      '/images/gallery/morleta-park-2/PHOTO-2026-03-30-20-32-32 2.jpg',
      '/images/gallery/morleta-park-2/PHOTO-2026-03-30-20-32-32 3.jpg',
      '/images/gallery/morleta-park-2/PHOTO-2026-03-30-20-32-32.jpg'
    ],
    location: 'Moreleta Park, GP',
  },
  // ── Commercial ────────────────────────────────────────────────────────────
  {
    id: 12,
    category: 'Commercial',
    title: 'Commercial Installation 1',
    caption: 'Professional commercial solar installation delivering reliable energy and significant cost savings.',
    image: '/images/gallery/commercial-1/PHOTO-2026-03-30-20-27-16 2.jpg',
    images: [
      '/images/gallery/commercial-1/PHOTO-2026-03-30-20-27-16 2.jpg',
      '/images/gallery/commercial-1/PHOTO-2026-03-30-20-27-16.jpg',
      '/images/gallery/commercial-1/PHOTO-2026-03-30-20-27-17.jpg'
    ],
    location: 'Gauteng, GP',
  },
  {
    id: 13,
    category: 'Commercial',
    title: 'Commercial Installation 2',
    caption: 'Large-scale commercial energy system providing sustained grid independence and load-shedding protection.',
    image: '/images/gallery/commercial-2/PHOTO-2026-03-30-20-31-32.jpg',
    images: [
      '/images/gallery/commercial-2/PHOTO-2026-03-30-20-31-32.jpg',
      '/images/gallery/commercial-2/PHOTO-2026-03-30-20-31-33 2.jpg',
      '/images/gallery/commercial-2/PHOTO-2026-03-30-20-31-33.jpg',
      '/images/gallery/commercial-2/PHOTO-2026-03-30-20-31-35 2.jpg',
      '/images/gallery/commercial-2/PHOTO-2026-03-30-20-31-35.jpg',
      '/images/gallery/commercial-2/PHOTO-2026-03-30-20-31-36.jpg'
    ],
    location: 'Gauteng, GP',
  },
  {
    id: 14,
    category: 'Commercial',
    title: 'Sigenergy Commercial ESS',
    caption: 'Advanced Sigenergy Energy Storage System (ESS) for high-demand commercial power management.',
    image: '/images/gallery/sinergy-comercial/PHOTO-2026-03-30-20-36-30 2.jpg',
    images: [
      '/images/gallery/sinergy-comercial/PHOTO-2026-03-30-20-36-30 2.jpg',
      '/images/gallery/sinergy-comercial/PHOTO-2026-03-30-20-36-30 3.jpg',
      '/images/gallery/sinergy-comercial/PHOTO-2026-03-30-20-36-30.jpg',
      '/images/gallery/sinergy-comercial/PHOTO-2026-03-30-20-36-31 2.jpg',
      '/images/gallery/sinergy-comercial/PHOTO-2026-03-30-20-36-31.jpg'
    ],
    location: 'Johannesburg, GP',
  },
  {
    id: 15,
    category: 'Commercial',
    title: 'Benoni Commercial',
    caption: 'Industrial-grade commercial solar and storage solution for a Benoni business facility.',
    image: '/images/gallery/commercial-benonie/PHOTO-2026-03-30-20-38-27 2.jpg',
    images: [
      '/images/gallery/commercial-benonie/PHOTO-2026-03-30-20-38-27 2.jpg',
      '/images/gallery/commercial-benonie/PHOTO-2026-03-30-20-38-27.jpg',
      '/images/gallery/commercial-benonie/PHOTO-2026-03-30-20-38-28 2.jpg',
      '/images/gallery/commercial-benonie/PHOTO-2026-03-30-20-38-28 3.jpg',
      '/images/gallery/commercial-benonie/PHOTO-2026-03-30-20-38-28.jpg'
    ],
    location: 'Benoni, GP',
  },
  {
    id: 16,
    category: 'Commercial',
    title: 'Solar Commercial Installation',
    caption: 'Large-scale commercial rooftop solar installation delivering sustained energy cost savings.',
    image: '/images/gallery/solar-commercial/PHOTO-2026-03-30-21-09-09.jpg',
    images: [
      '/images/gallery/solar-commercial/PHOTO-2026-03-30-21-09-09.jpg',
      '/images/gallery/solar-commercial/PHOTO-2026-03-30-21-09-10 2.jpg',
      '/images/gallery/solar-commercial/PHOTO-2026-03-30-21-09-10.jpg',
      '/images/gallery/solar-commercial/PHOTO-2026-03-30-21-09-11 2.jpg',
      '/images/gallery/solar-commercial/PHOTO-2026-03-30-21-09-11.jpg'
    ],
    location: 'Johannesburg, GP',
  },
  // ── EV Charging ──────────────────────────────────────────────────────────
  {
    id: 17,
    category: 'EV Charging',
    title: 'Morningside BYD',
    caption: 'High-performance BYD EV charging integration at a premium Morningside residence.',
    image: '/images/gallery/ev-morningside-byd/PHOTO-2026-03-30-20-46-07.jpg',
    images: [
      '/images/gallery/ev-morningside-byd/PHOTO-2026-03-30-20-46-07.jpg',
      '/images/gallery/ev-morningside-byd/PHOTO-2026-03-30-20-46-10.jpg'
    ],
    location: 'Morningside, GP',
    type: 'video',
    videoUrl: '/images/gallery/ev-morningside-byd/ev-morningside.mp4.mp4',
  },
  {
    id: 18,
    category: 'EV Charging',
    title: 'BYD Electric Vehicle',
    caption: 'BYD EV charging solution with smart energy management and rapid charge capabilities.',
    image: '/images/gallery/ev-electric-vehicle-byd/PHOTO-2026-03-30-20-40-19 2.jpg',
    images: [
      '/images/gallery/ev-electric-vehicle-byd/PHOTO-2026-03-30-20-40-19 2.jpg',
      '/images/gallery/ev-electric-vehicle-byd/PHOTO-2026-03-30-20-40-19 3.jpg',
      '/images/gallery/ev-electric-vehicle-byd/PHOTO-2026-03-30-20-40-19.jpg'
    ],
    location: 'Johannesburg, GP',
  },
  {
    id: 19,
    category: 'EV Charging',
    title: 'BYD Seal Lion 7',
    caption: 'Flagship BYD Seal Lion 7 charging infrastructure with high-fidelity telemetry monitoring.',
    image: '/images/gallery/ev-byd-sealion-7/PHOTO-2026-03-30-20-41-41 2.jpg',
    images: [
      '/images/gallery/ev-byd-sealion-7/PHOTO-2026-03-30-20-41-41 2.jpg',
      '/images/gallery/ev-byd-sealion-7/PHOTO-2026-03-30-20-41-41.jpg',
      '/images/gallery/ev-byd-sealion-7/PHOTO-2026-03-30-20-41-42 2.jpg',
      '/images/gallery/ev-byd-sealion-7/PHOTO-2026-03-30-20-41-42.jpg'
    ],
    location: 'Sandton, GP',
  },
  {
    id: 20,
    category: 'EV Charging',
    title: 'MG Centurion',
    caption: 'Premium MG EV charging station with smart-current management seamlessly integrated into the home energy system.',
    image: '/images/gallery/ev-mg-centurion/PHOTO-2026-03-30-20-43-25 2.jpg',
    images: [
      '/images/gallery/ev-mg-centurion/PHOTO-2026-03-30-20-43-25 2.jpg',
      '/images/gallery/ev-mg-centurion/PHOTO-2026-03-30-20-43-25 3.jpg',
      '/images/gallery/ev-mg-centurion/PHOTO-2026-03-30-20-43-25.jpg'
    ],
    location: 'Centurion, GP',
  },
  {
    id: 21,
    category: 'EV Charging',
    title: 'BYD Seal Lion 6 — Edenvale',
    caption: 'Smart charging solution for the BYD Seal Lion 6, perfectly integrated for urban home energy systems.',
    image: '/images/gallery/ev-byd-sealion-6-edenvale/PHOTO-2026-03-30-20-46-58.jpg',
    images: [
      '/images/gallery/ev-byd-sealion-6-edenvale/PHOTO-2026-03-30-20-46-58.jpg',
      '/images/gallery/ev-byd-sealion-6-edenvale/PHOTO-2026-03-30-20-46-59 2.jpg',
      '/images/gallery/ev-byd-sealion-6-edenvale/PHOTO-2026-03-30-20-46-59 3.jpg',
      '/images/gallery/ev-byd-sealion-6-edenvale/PHOTO-2026-03-30-20-46-59.jpg',
      '/images/gallery/ev-byd-sealion-6-edenvale/PHOTO-2026-03-30-20-47-00.jpg'
    ],
    location: 'Edenvale, GP',
  },
  {
    id: 22,
    category: 'EV Charging',
    title: 'Chery Sandton',
    caption: 'Advanced Chery EV charging interface providing reliable power delivery for a high-end Sandton property.',
    image: '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-49.jpg',
    images: [
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-49.jpg',
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-50 2.jpg',
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-50.jpg',
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-51 2.jpg',
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-51 3.jpg',
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-51.jpg',
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-52 2.jpg',
      '/images/gallery/ev-chery-sandton/PHOTO-2026-03-30-20-55-52.jpg'
    ],
    location: 'Sandton, GP',
  },
  {
    id: 23,
    category: 'EV Charging',
    title: 'Randburg Chery',
    caption: 'Customized Chery EV charging installation optimized for peak efficiency and home system integration.',
    image: '/images/gallery/ev-charger-chery-randburg/PHOTO-2026-03-30-20-49-28.jpg',
    images: [
      '/images/gallery/ev-charger-chery-randburg/PHOTO-2026-03-30-20-49-28.jpg',
      '/images/gallery/ev-charger-chery-randburg/PHOTO-2026-03-30-20-49-29.jpg',
      '/images/gallery/ev-charger-chery-randburg/PHOTO-2026-03-30-20-49-30 2.jpg',
      '/images/gallery/ev-charger-chery-randburg/PHOTO-2026-03-30-20-49-30.jpg'
    ],
    location: 'Randburg, GP',
  },
  {
    id: 24,
    category: 'EV Charging',
    title: 'Bryanston Jaecoo',
    caption: 'Sleek Jaecoo high-speed charger installation featuring an aesthetically integrated wall-mount.',
    image: '/images/gallery/ev-bryanston-jaecoo/PHOTO-2026-03-30-20-59-48.jpg',
    images: [
      '/images/gallery/ev-bryanston-jaecoo/PHOTO-2026-03-30-20-59-48.jpg',
      '/images/gallery/ev-bryanston-jaecoo/PHOTO-2026-03-30-20-59-49 2.jpg',
      '/images/gallery/ev-bryanston-jaecoo/PHOTO-2026-03-30-20-59-49.jpg'
    ],
    location: 'Bryanston, GP',
  },
  {
    id: 25,
    category: 'EV Charging',
    title: 'Serengeti Jaecoo/Omoda',
    caption: 'Bespoke Jaecoo/Omoda charging ecosystem at the prestigious Serengeti Golf & Wildlife Estate.',
    image: '/images/gallery/ev-jaecoo-omoda-serengeti/PHOTO-2026-03-30-21-02-56.jpg',
    images: [
      '/images/gallery/ev-jaecoo-omoda-serengeti/PHOTO-2026-03-30-21-02-56.jpg',
      '/images/gallery/ev-jaecoo-omoda-serengeti/PHOTO-2026-03-30-21-02-57 2.jpg',
      '/images/gallery/ev-jaecoo-omoda-serengeti/PHOTO-2026-03-30-21-02-57.jpg'
    ],
    location: 'Serengeti, GP',
  },
  {
    id: 26,
    category: 'EV Charging',
    title: 'Benoni Omoda Hub',
    caption: 'State-of-the-art Omoda charging terminal with integrated surge protection and intelligent monitoring.',
    image: '/images/gallery/ev-omoda-benoni/PHOTO-2026-03-30-21-07-17.jpg',
    images: [
      '/images/gallery/ev-omoda-benoni/PHOTO-2026-03-30-21-07-17.jpg',
      '/images/gallery/ev-omoda-benoni/PHOTO-2026-03-30-21-07-18 2.jpg',
      '/images/gallery/ev-omoda-benoni/PHOTO-2026-03-30-21-07-18.jpg'
    ],
    location: 'Benoni, GP',
  },
  {
    id: 27,
    category: 'EV Charging',
    title: 'BYD Dolphin',
    caption: 'Smart charging solution for the BYD Dolphin, perfectly integrated for urban home energy systems.',
    image: '/images/gallery/byd-dolphin/Dolphin 1.jpg',
    images: [
      '/images/gallery/byd-dolphin/Dolphin 1.jpg',
      '/images/gallery/byd-dolphin/Dolphin 2.jpg',
      '/images/gallery/byd-dolphin/Dolphin 3.jpg',
      '/images/gallery/byd-dolphin/Dolphin 4.jpg'
    ],
    location: 'Edenvale, GP',
  },
];

const categories = ['All', 'Residential', 'EV Charging', 'Commercial', 'Battery'];

// ─── LIGHTBOX ────────────────────────────────────────────────────────────────
function Lightbox({ project, onClose }) {
  const images = project.images || [project.image];
  const [idx, setIdx] = useState(0);

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={e => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="lightbox__header">
          <span className="lightbox__location">{project.location}</span>
          <h2 className="lightbox__title">{project.title}</h2>
          {images.length > 1 && <span className="lightbox__count">{idx + 1} / {images.length}</span>}
        </div>
        <div className="lightbox__img-wrap">
          <img key={images[idx]} src={encodeURI(images[idx])} alt={`${project.title} — ${idx + 1}`} className="lightbox__img" />
          {images.length > 1 && (
            <>
              <button className="lightbox__nav lightbox__nav--prev" onClick={prev}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="lightbox__nav lightbox__nav--next" onClick={next}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="lightbox__thumbs">
            {images.map((src, i) => (
              <button key={i} className={`lightbox__thumb ${i === idx ? 'lightbox__thumb--active' : ''}`} onClick={() => setIdx(i)}>
                <img src={encodeURI(src)} alt={`${i + 1}`} />
              </button>
            ))}
          </div>
        )}
        <p className="lightbox__caption">{project.caption}</p>
      </div>
    </div>
  );
}

// ─── VIDEO MODAL ─────────────────────────────────────────────────────────────
function VideoModal({ videoUrl, onClose }) {
  if (!videoUrl) return null;
  return (
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal__content" onClick={e => e.stopPropagation()}>
        <button className="video-modal__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <video controls autoPlay className="video-modal__player" src={videoUrl}>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onOpenVideo, onOpenLightbox }) {
  const isVideo = project.type === 'video';
  const hasMultiple = project.images && project.images.length > 1;

  return (
    <div 
      className="gallery-card" 
      role="button" 
      tabIndex={0} 
      onKeyDown={(e) => { if (e.key === 'Enter') isVideo ? onOpenVideo(project.videoUrl) : onOpenLightbox(project); }}
      onClick={() => isVideo ? onOpenVideo(project.videoUrl) : onOpenLightbox(project)}
    >
      <div className="gallery-card__inner">
        <div className="gallery-card__image-wrap">
          <img src={encodeURI(project.image)} alt={project.title} className="gallery-card__image" />
          {isVideo && (
            <div className="video-indicator">
              <div className="video-indicator__circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>
          )}
          {hasMultiple && (
            <div className="multi-indicator">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
              <span>{project.images.length}</span>
            </div>
          )}
        </div>
        <div className="gallery-card__overlay">
          <div className="gallery-card__badge">{project.category}</div>
          <div className="gallery-card__content">
            <span className="gallery-card__location">{project.location}</span>
            <h3 className="gallery-card__title">{project.title}</h3>
            <p className="gallery-card__caption">{project.caption}</p>
          </div>
          <div className="gallery-card__view-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const carouselSlides = projects.slice(0, 5).map(p => ({
    content: (
      <div className="featured-slide" style={{ backgroundImage: `linear-gradient(rgba(8,13,26,0.4),rgba(8,13,26,0.8)),url(${encodeURI(p.image)})` }}>
        <div className="featured-slide__content">
          <span className="label" style={{ color: 'var(--orange-light)' }}>Featured Portfolio</span>
          <h2 className="headline-lg">{p.title}</h2>
          <p className="body-lg">{p.caption}</p>
          <div className="featured-slide__meta">
            <div className="meta-item"><strong>Category:</strong> {p.category}</div>
            <div className="meta-item"><strong>Location:</strong> {p.location}</div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="page-enter">
      <PageHero label="Project Gallery" title="World-Class" accent="Energy Solutions"
        subtitle="Explore our professional installations across Residential, Commercial, Battery Storage, and EV Charging."
        cta="Partner With Us" ctaTo="/contact" image="/images/hero-gallery.jpg" />

      {activeLightbox && <Lightbox project={activeLightbox} onClose={() => setActiveLightbox(null)} />}
      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />

      <section className="section section--navy" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="label">Premium Portfolio</span>
            <h2 className="headline-lg" style={{ marginTop: '12px' }}>Excellence in Action</h2>
          </div>
          <Carousel slides={carouselSlides} autoPlay interval={5000} />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="filter-bar">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`filter-btn ${filter === c ? 'filter-btn--active' : ''}`}>{c}</button>
            ))}
          </div>
          <div className="grid-3 animate-grid">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} onOpenVideo={setActiveVideo} onOpenLightbox={setActiveLightbox} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .lightbox{position:fixed;inset:0;background:rgba(5,8,18,0.97);backdrop-filter:blur(20px);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .3s ease}
        .lightbox__content{position:relative;width:100%;max-width:1000px;display:flex;flex-direction:column;align-items:center;gap:16px;max-height:95vh;overflow-y:auto}
        .lightbox__close{position:fixed;top:24px;right:24px;width:48px;height:48px;background:var(--blue);border:none;border-radius:50%;color:white;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10001;transition:all .3s}
        .lightbox__close:hover{transform:scale(1.1) rotate(90deg)}
        .lightbox__header{width:100%;text-align:center}
        .lightbox__location{font-size:.75rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--orange);display:block;margin-bottom:6px}
        .lightbox__title{font-size:1.6rem;font-weight:800;color:#fff;margin:0}
        .lightbox__count{font-size:.8rem;color:rgba(255,255,255,.5);margin-top:6px;display:inline-block}
        .lightbox__img-wrap{position:relative;width:100%;border-radius:20px;overflow:hidden;max-height:65vh;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04)}
        .lightbox__img{width:100%;max-height:65vh;object-fit:contain;display:block;animation:imgFade .3s ease}
        @keyframes imgFade{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:scale(1)}}
        .lightbox__nav{position:absolute;top:50%;transform:translateY(-50%);width:52px;height:52px;border-radius:50%;background:rgba(11,14,26,.8);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.15);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;z-index:2}
        .lightbox__nav:hover{background:var(--blue)}
        .lightbox__nav--prev{left:12px}
        .lightbox__nav--next{right:12px}
        .lightbox__thumbs{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
        .lightbox__thumb{width:72px;height:56px;border-radius:10px;overflow:hidden;border:2px solid rgba(255,255,255,.1);cursor:pointer;transition:all .2s;padding:0;background:rgba(255,255,255,.05)}
        .lightbox__thumb img{width:100%;height:100%;object-fit:cover;display:block}
        .lightbox__thumb--active{border-color:var(--blue)}
        .lightbox__caption{font-size:.95rem;color:rgba(255,255,255,.6);text-align:center;max-width:680px;line-height:1.6;margin:0}
        .multi-indicator{position:absolute;top:14px;right:14px;background:rgba(26,86,219,.85);backdrop-filter:blur(8px);color:#fff;border-radius:999px;padding:5px 10px;font-size:.72rem;font-weight:700;display:flex;align-items:center;gap:5px;z-index:5;border:1px solid rgba(255,255,255,.25)}
        .video-modal{position:fixed;inset:0;background:rgba(8,13,26,.95);backdrop-filter:blur(16px);z-index:10000;display:flex;align-items:center;justify-content:center;padding:40px}
        .video-modal__content{position:relative;width:100%;max-width:1200px;aspect-ratio:16/9;background:#000;border-radius:24px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.8)}
        .video-modal__player{width:100%;height:100%;border:none}
        .video-modal__close{position:absolute;top:24px;right:24px;width:48px;height:48px;background:var(--blue);border:none;border-radius:50%;color:white;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10001;transition:all .3s}
        .video-modal__close:hover{transform:scale(1.1) rotate(90deg)}
        .filter-bar{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:60px;justify-content:center}
        .filter-btn{padding:10px 24px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);color:var(--grey-light);font-weight:600;font-size:.9rem;cursor:pointer;transition:all .3s}
        .filter-btn:hover{background:rgba(255,255,255,.08);color:var(--white)}
        .filter-btn--active{background:var(--blue)!important;color:var(--white)!important;border-color:var(--blue)!important;box-shadow:0 4px 20px rgba(26,86,219,.4)}
        .gallery-card{position:relative;border-radius:24px;overflow:hidden;background:var(--navy-card);border:1px solid rgba(255,255,255,.08);aspect-ratio:4/5;cursor:pointer;transition:var(--transition)}
        .gallery-card__inner{position:relative;width:100%;height:100%}
        .gallery-card__image-wrap{width:100%;height:100%;overflow:hidden;position:relative}
        .gallery-card__image{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.4,0,.2,1)}
        .video-indicator{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(8,13,26,.2);z-index:2}
        .video-indicator__circle{width:64px;height:64px;background:var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(26,86,219,.6)}
        .gallery-card__overlay{position:absolute;inset:0;padding:30px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(to top,rgba(8,13,26,.95) 0%,rgba(8,13,26,.4) 40%,transparent 100%);z-index:3}
        .gallery-card__badge{position:absolute;top:20px;left:20px;padding:6px 14px;background:rgba(255,255,255,.1);backdrop-filter:blur(12px);border-radius:999px;font-size:.75rem;font-weight:700;color:var(--white);border:1px solid rgba(255,255,255,.2);text-transform:uppercase;letter-spacing:.05em}
        .gallery-card__location{font-size:.8rem;color:var(--orange-light);font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;display:block}
        .gallery-card__title{font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:8px;line-height:1.2}
        .gallery-card__caption{font-size:.95rem;color:rgba(255,255,255,.7);line-height:1.5;max-height:0;overflow:hidden;transition:all .4s ease;opacity:0}
        .gallery-card__view-btn{position:absolute;top:20px;right:20px;width:44px;height:44px;background:var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;transform:scale(0);transition:all .4s cubic-bezier(.175,.885,.32,1.275);z-index:4}
        @media (hover: hover) {
          .gallery-card:hover .gallery-card__image{transform:scale(1.1)}
          .gallery-card:hover .gallery-card__caption{max-height:100px;opacity:1;margin-top:10px}
          .gallery-card:hover .gallery-card__view-btn{transform:scale(1)}
          .gallery-card:hover{transform:translateY(-8px);border-color:var(--blue);box-shadow:0 20px 40px rgba(0,0,0,.4)}
        }
        .featured-slide{height:600px;background-size:cover;background-position:center;display:flex;align-items:center;padding:80px;border-radius:32px;margin:0 10px}
        .featured-slide__content{max-width:600px}
        .featured-slide__meta{display:flex;gap:30px;margin-top:30px;padding-top:30px;border-top:1px solid rgba(255,255,255,.1)}
        .meta-item{font-size:.9rem;color:var(--grey-light)}
        .meta-item strong{color:var(--white);display:block;margin-bottom:4px}
        .animate-grid{animation:fadeIn .8s ease forwards}
        @keyframes fadeIn{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:768px){
          .featured-slide{height:auto;padding:40px 24px;min-height:400px}
          .gallery-card{aspect-ratio:3/4}
          .gallery-card__caption{max-height:100px;opacity:1;margin-top:10px} /* Always show caption on mobile */
          .gallery-card__view-btn{transform:scale(1)} /* Always show view btn on mobile */
          .lightbox__nav--prev{left:4px}.lightbox__nav--next{right:4px}
          .lightbox__close{top:12px;right:12px;width:40px;height:40px}
          .video-modal{padding:10px}.video-modal__content{aspect-ratio:9/16}
        }
      `}</style>
    </div>
  );
}
