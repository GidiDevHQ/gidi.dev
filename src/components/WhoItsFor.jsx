function WhoItsFor() {
  return (
    <section className="section section--audience">
      <div className="section__inner section__inner--split">
        <div className="audience-card audience-card--dev">
          <div className="section__eyebrow">For Developers</div>
          <h3>Show what you can actually build, not just what your CV says.</h3>
          <p>
            Whether you&apos;re just getting started or you&apos;ve been coding for years, gidi.dev gives you a public
            track record that grows with you. No more hoping someone takes a chance on your CV.
          </p>
        </div>
        <div className="audience-card audience-card--company">
          <div className="section__eyebrow">For Companies</div>
          <h3>Find ranked developers with real project history.</h3>
          <p>
            Stop wasting time on bad-fit interviews. Browse ranked developers, see their real work, and hire with
            confidence. The talent is here — gidi.dev just makes it findable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;
