import { useTranslation } from '../../../i18n';
import './SubscribeForm.css';

export default function SubscribeForm() {
  const { t } = useTranslation();
  const placeholder = t('hero.subscribe.placeholder');

  return (
    <form className="subscribe-form" onSubmit={(event) => event.preventDefault()}>
      <input
        type="email"
        required
        placeholder={placeholder}
        className="subscribe-form__input"
        aria-label={placeholder}
      />
      <button type="submit" className="subscribe-form__button">
        {t('hero.subscribe.submit')}
      </button>
    </form>
  );
}
