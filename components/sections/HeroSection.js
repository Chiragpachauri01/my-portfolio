'use client';

import { useRef } from 'react';

// Animation hooks
import useSplitTextAnimation from '../../hooks/animations/useSplitTextAnimation';
import useHeroParallax from '../../hooks/animations/useHeroParallax';
import useRevealLine from '../../hooks/animations/useRevealLine';
import useTiltCard from '../../hooks/animations/useTiltCard';
import useMagneticButtons from '../../hooks/animations/useMagneticButtons';

import { splitToSpans } from '../../lib/utils';

export default function HeroSection() {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const tiltCardRef = useRef(null);

  // Activate animations
  useSplitTextAnimation(titleRef);
  useHeroParallax(titleRef);
  useRevealLine(lineRef);
  useTiltCard(tiltCardRef);
  useMagneticButtons(".magnetic");

  // Text logic
  const fullText =
    "I design & build playful, intelligent web experiences — fast, delightful & useful.";
  const accentText = "fast, delightful & useful.";

  const idx = fullText.indexOf(accentText);
  const pre = fullText.slice(0, idx);
  const post = fullText.slice(idx + accentText.length);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <div className="accent-badge">🎨 Creative Technologist</div>

        {/* HERO TITLE WITH SPLIT TEXT */}
        <h1 ref={titleRef} className="hero-title">
          {splitToSpans(pre)}
          <span className="accent-text">{accentText}</span>
          {splitToSpans(post)}
        </h1>

        {/* SUBTEXT */}
        <p className="hero-sub">
          I blend frontend craftsmanship with GenAI, RAG and vector search
          to create production-ready products and delightful experiences.
        </p>

        {/* CTA BUTTONS */}
        <div className="cta-row">
          <a href="#work" className="btn-primary magnetic">See Featured Work</a>
          <a href="#play" className="btn-ghost magnetic">Playground</a>
        </div>

        {/* UNDERLINE LINE ANIMATION */}
        <div ref={lineRef} className="reveal-line"></div>
      </div>

      {/* RIGHT SIDE CARD WITH TILT EFFECT */}
      <aside>
        <div ref={tiltCardRef} className="glass" style={{ maxWidth: '420px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '12px',
                display: 'grid',
                placeItems: 'center',
                background: 'linear-gradient(135deg,var(--accent1),#ec4899)',
                color: 'white',
                fontWeight: '800'
              }}>
              CP
            </div>

            <div>
              <div style={{ fontWeight: '800' }}>Hi, I’m Chandresh</div>
              <div style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '6px' }}>
                I ship product-ready web & AI features
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '12px',
              padding: '10px',
              borderRadius: '10px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.08))'
            }}>
            <div
              style={{
                height: '8px',
                background: 'rgba(0,0,0,0.06)',
                borderRadius: '6px',
                width: '40%',
                marginBottom: '8px'
              }}
            ></div>

            <div
              style={{
                height: '8px',
                background: 'rgba(0,0,0,0.04)',
                borderRadius: '6px',
                width: '60%',
                marginBottom: '8px'
              }}
            ></div>

            <div
              style={{
                height: '8px',
                background: 'rgba(0,0,0,0.03)',
                borderRadius: '6px',
                width: '30%'
              }}
            ></div>
          </div>

          <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--muted)' }}>
            Now exploring: LangChain • Vector patterns
          </div>
        </div>
      </aside>
    </section>
  );
}
