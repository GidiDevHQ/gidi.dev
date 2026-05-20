import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhoItsFor from './components/WhoItsFor.jsx';
import WaitlistForm from './components/WaitlistForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [waitlistCount, setWaitlistCount] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Waitlist?maxRecords=1000&fields[]=Email`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        setWaitlistCount(data.records?.length ?? 0);
      } catch (err) {
        console.error('Could not load waitlist count', err);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero count={waitlistCount} onSignup={() => setWaitlistCount((current) => (current ?? 0) + 1)} />
        <Problem />
        <HowItWorks />
        <WhoItsFor />
        <section className="section section--waitlist" id="waitlist">
          <div className="section__inner">
            <div className="section__eyebrow">Ready to join?</div>
            <h2 className="section__title">Join the gidi.dev waitlist</h2>
            <p className="section__subtitle">
              Be the first to see the platform for skill-first, rank-based hiring.
            </p>
            <WaitlistForm location="bottom" onSignup={() => setWaitlistCount((current) => (current ?? 0) + 1)} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
