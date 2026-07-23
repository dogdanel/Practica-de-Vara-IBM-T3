import './AppDownloadButtons.css';

export default function AppDownloadButtons() {
  return (
    <div className="app-download-buttons">
      <a href="#" className="app-download-buttons__link">
        <img
          src="/badges/google-play.png"
          alt="Get it on Google Play"
          className="app-download-buttons__badge"
        />
      </a>
      <a href="#" className="app-download-buttons__link">
        <img
          src="/badges/app-store.png"
          alt="Download on the App Store"
          className="app-download-buttons__badge"
        />
      </a>
    </div>
  );
}
