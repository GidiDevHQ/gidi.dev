function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">gidi.dev</p>
      <p className="footer__text">Built by a Nigerian developer, for Nigerian developers</p>
      <div className="footer__links">
        <a className="footer__link footer__link--icon" href="https://twitter.com/DevGidi" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.54 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor" />
          </svg>
          @DevGidi
        </a>
        <a className="footer__link footer__link--icon" href="https://www.linkedin.com/in/Gidi%20Dev" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7.5 0h3.8v1.7h.05c.53-1 1.82-2.1 3.74-2.1 4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3-.02-3-1.84-3-1.84 0-2.12 1.43-2.12 2.9V21h-4z" fill="currentColor" />
          </svg>
          Gidi Dev
        </a>
      </div>
      <p className="footer__copyright">© 2026 gidi.dev</p>
    </footer>
  );
}

export default Footer;
