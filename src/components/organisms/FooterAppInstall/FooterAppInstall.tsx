import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import AppDownloadButtons from '../../molecules/AppDownloadButtons/AppDownloadButtons';
import './FooterAppInstall.css';

export default function FooterAppInstall() {
  return (
    <div className="footer-app-install">
      <Heading width={318.75} height={30}>Install App</Heading>
      <Text className="footer-app-install__label">From App Store or Google Play</Text>
      <AppDownloadButtons />

      <Text className="footer-app-install__label footer-app-install__label--spaced">
        Secured Payment Gateways
      </Text>
      <img
        src="/badges/payment-methods.png"
        alt="VISA, Mastercard, Maestro, American Express"
        className="footer-app-install__payments-img"
      />
    </div>
  );
}
