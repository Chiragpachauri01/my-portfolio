// Utility to safely split text into spans, preserving non-breaking spaces for GSAP targeting
export const splitToSpans = (text) => {
    // Replicates the original JS logic using React components
    return text.split('').map((ch, index) => (
        <span key={index} className="split-char">
            {ch === ' ' ? '\u00A0' : ch}
        </span>
    ));
};  