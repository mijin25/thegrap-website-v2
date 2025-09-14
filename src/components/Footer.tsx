export default function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-header">
          <h2 className="text-display-4 scroll-reveal-down">
            We shape moments,<br />
            build connections,<br />
            and create what matters.
          </h2>
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }} className="scroll-reveal-down">
            <button className="btn btn-large">
              <span className="btn-text">Let's connect</span>
              <div className="btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12.0039H20" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M13 5L20.0036 12L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-bar">
            <p>©2025. All right reserved</p>
            <div className="footer-links">
              <button className="btn btn-small">
                <span className="btn-text">Instagram</span>
                <div className="btn-icon" style={{ display: 'none' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5L20 12M20 12L13 19M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <button className="btn btn-small">
                <span className="btn-text">Behance</span>
                <div className="btn-icon" style={{ display: 'none' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5L20 12M20 12L13 19M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}