const steps = [
  {
    title: 'Level Up',
    description:
      'Solve real-world coding challenges across different skill levels. Earn points, climb ranks, and build a track record that actually means something.',
  },
  {
    title: 'Build Your Profile',
    description:
      'Your gidi profile shows your rank, your completed projects, and your growth over time. It\'s a living portfolio — not a static CV.',
  },
  {
    title: 'Get Hired',
    description:
      'Companies on gidi.dev discover developers through rank and real work. No ghosting. No algorithm-test interviews. Just your skills, verified.',
  },
];

function HowItWorks() {
  return (
    <section className="section section--steps">
      <div className="section__inner">
        <div className="section__header">
          <div className="section__eyebrow">How it works</div>
          <h2>Three simple steps to move your work from private to visible.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="step-card">
              <div className="step-card__icon">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
