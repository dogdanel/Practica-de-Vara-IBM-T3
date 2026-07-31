import FeatureBar from '../organisms/FeatureBar/FeatureBar';
import FooterBrand from '../organisms/FooterBrand/FooterBrand';
import FooterLinksGrid from '../organisms/FooterLinksGrid/FooterLinksGrid';
import FooterAppInstall from '../organisms/FooterAppInstall/FooterAppInstall';
import FooterBottomBar from '../organisms/FooterBottomBar/FooterBottomBar';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FeatureBar />
        <div className="footer__main">
          <FooterBrand />
          <FooterLinksGrid />
          <FooterAppInstall />
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
}
