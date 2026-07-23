import './SubscribeForm.css';

export default function SubscribeForm() {
  return (
    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        required
        placeholder="Your email address"
        className="subscribe-form__input"
        aria-label="Your email address"
      />
      <button type="submit" className="subscribe-form__button">
        Subscribe
      </button>
    </form>
  );
}
