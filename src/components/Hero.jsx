import WaitlistForm from './WaitlistForm.jsx';

function Hero({ count, onSignup }) {
  const socialProof =
    typeof count === 'number'
      ? `Join ${count} developer${count === 1 ? '' : 's'} already on the waitlist.`
      : 'Join the waitlist and be the first to hear when gidi.dev launches.';

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <div className="hero__eyebrow">Skill-first hiring for Nigerian developers</div>
        <h1>Stop sending CVs into the void. Let your rank speak for you.</h1>
        <p className="hero__description">
          gidi.dev is a gamified developer growth platform where you level up through real-world coding challenges,
          earn a verified rank, and get discovered by companies looking to hire based on actual skill — not just a CV.
        </p>
        <WaitlistForm location="hero" onSignup={onSignup} />
        <p className="hero__social-proof">{socialProof}</p>
      </div>
      <div className="hero__visual">
        <div className="code-card">
          <div className="code-card__header">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="code-card__body">
            <p className="code-line code-line--tag">&lt;challenge&gt;</p>
            <p className="code-line">
              <span className="code-token code-token--func">function</span>{' '}
              <span className="code-token code-token--name">levelUp</span>() {'{'}{' '}
            </p>
            <p className="code-line">
              {'  '}<span className="code-token code-token--prop">rank</span>: <span className="code-token code-token--value">'Junior+';</span>
            </p>
            <p className="code-line">
              {'  '}<span className="code-token code-token--prop">score</span>: <span className="code-token code-token--value">1280</span>
            </p>
            <p className="code-line">{'}'}</p>
            <p className="code-line code-line--comment">// Real challenges, real progress</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
