import PhoneItem from '../../molecules/PhoneItem/PhoneItem';
import SocialIcon, { type SocialPlatform } from '../../atoms/SocialIcon/SocialIcon';
import './FooterBottomBar.css';

const socialLinks: SocialPlatform[] = ['facebook', 'twitter', 'skype', 'instagram'];

export default function FooterBottomBar() {
  return (
    <div className="footer-bottom-bar">
      <p className="footer-bottom-bar__copyright">
        © {new Date().getFullYear()}, Nest – WordPress Ecommerce Template
        <br />
        All rights reserved
      </p>

      <div className="footer-bottom-bar__phones">
        <PhoneItem number="1900646666" label="Working 8:00 - 22:00" />
        <PhoneItem number="1900648888" label="24/7 Support Center" />
      </div>

      <div className="footer-bottom-bar__social">
        <div className="footer-bottom-bar__social-row">
          <span className="footer-bottom-bar__social-label">Follow Us</span>
          <div className="footer-bottom-bar__social-icons">
            {socialLinks.map((platform) => (
              <SocialIcon key={platform} platform={platform} />
            ))}
          </div>
        </div>
        <p className="footer-bottom-bar__discount">Up to 15% discount on your first subscribe</p>
      </div>
    </div>
  );
}
