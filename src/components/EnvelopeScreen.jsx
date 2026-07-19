const CornerSvg = () => (
  <svg viewBox="0 0 40 40">
    <path d="M2 2 Q2 20 20 20 M2 2 Q20 2 20 20" stroke="#C79A3B" strokeWidth="1.4" fill="none"/>
  </svg>
);

export default function EnvelopeScreen({ onOpen }) {
  return (
    <div id="envelope-screen" className="show">
      <div className="envelope-card">
        <span className="corner tl"><CornerSvg/></span>
        <span className="corner tr"><CornerSvg/></span>
        <span className="corner bl"><CornerSvg/></span>
        <span className="corner br"><CornerSvg/></span>
        <p className="together-text">Together with their families</p>
        <h1 className="envelope-names">Pravallika <span className="envelope-heart">❤</span> Sai Sandeep</h1>
        <p className="envelope-msg">invite you to celebrate the beginning of their forever.</p>
        <button className="open-btn" id="openInviteBtn" onClick={onOpen}>Open Invitation</button>
      </div>
    </div>
  );
}
