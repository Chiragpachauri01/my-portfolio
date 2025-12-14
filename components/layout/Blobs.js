'use client';
import useBlobsParallax from '../../hooks/animations/useBlobsParallax';

export default function Blobs() {
  useBlobsParallax();

  return (
    <div className="blob-layer">
      <div id="blob1" className="blob b1"></div>
      <div id="blob2" className="blob b2"></div>
      <div id="blob3" className="blob b3"></div>
    </div>
  );
}
