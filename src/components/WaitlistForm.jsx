import { useState } from 'react';

function WaitlistForm({ location, onSignup }) {
  const [email, setEmail] = useState('');
  const [frustration, setFrustration] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [recordId, setRecordId] = useState('');
  const [followupSubmitted, setFollowupSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [followupError, setFollowupError] = useState('');
  const [loading, setLoading] = useState(false);
  const [followupLoading, setFollowupLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Enter a valid email to join the waitlist.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Waitlist`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              Name: email,
              Email: email,
              'Referral Source': location === 'hero' ? 'Hero section' : 'Bottom section',
              'Signup Date': new Date().toISOString(),
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Could not submit your request.');
      }

      const data = await response.json();
      setRecordId(data.id);
      setSubmitted(true);
      setEmail('');
      if (typeof onSignup === 'function') {
        onSignup();
      }
    } catch (err) {
      setError('Unable to submit right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleFollowupSubmit = async () => {
    if (!recordId) {
      setFollowupError('Unable to save feedback right now.');
      return;
    }

    if (!frustration.trim()) {
      setFollowupError('Write one sentence and we will save it.');
      return;
    }

    setFollowupLoading(true);
    setFollowupError('');

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Waitlist/${recordId}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              'Frustration?': frustration,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Could not submit feedback.');
      }

      setFollowupSubmitted(true);
    } catch (err) {
      setFollowupError('Unable to save your follow-up right now. Please try again later.');
    } finally {
      setFollowupLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="waitlist-thankyou">
        <h3>You're on the list.</h3>
        <p>
          Your spot is saved. We'll keep you updated as gidi.dev comes to life, and you'll be one of the first to hear when
          we launch.
        </p>
        {location === 'bottom' && !followupSubmitted && (
          <div className="followup-card">
            <p className="followup-card__prompt">
              Optional: What's your biggest frustration as a developer right now?
            </p>
            <textarea
              value={frustration}
              onChange={(e) => setFrustration(e.target.value)}
              placeholder="Tell us your biggest frustration"
              className="textarea textarea--followup"
            />
            <button
              type="button"
              className="button button--ghost"
              onClick={handleFollowupSubmit}
              disabled={followupLoading}
            >
              {followupLoading ? 'Saving...' : 'Save feedback'}
            </button>
            {followupError && <p className="form-error">{followupError}</p>}
          </div>
        )}
        {location === 'bottom' && followupSubmitted && (
          <p className="followup-card__confirmation">Thanks — your feedback is saved.</p>
        )}
        {location === 'bottom' && (
          <div className="share-buttons">
            <a
              href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20gidi.dev%20waitlist%20-%20a%20skill-first%20platform%20for%20Nigerian%20developers!"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Share on Twitter
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgidi.dev"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Share on LinkedIn
            </a>
            <a
              href="https://wa.me/?text=Join%20me%20on%20the%20gidi.dev%20waitlist%20-%20a%20new%20platform%20for%20Nigerian%20developers%20to%20rank%20and%20get%20hired.%20https%3A%2F%2Fgidi.dev"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Share on WhatsApp
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="waitlist-form__fields">
        <label className="sr-only" htmlFor={`${location}-email`}>Email address</label>
        <input
          id={`${location}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="input"
          aria-label="Enter your email address"
        />
        <button type="submit" className="button button--primary" disabled={loading}>
          {loading ? 'Sending...' : 'Join the Waitlist'}
        </button>
      </div>
      <p className="waitlist-form__help">No spam. Just updates as we build.</p>
      {error && <p className="form-error">{error}</p>}
    </form>
  );
}

export default WaitlistForm;
