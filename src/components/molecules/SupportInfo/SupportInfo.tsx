import Icon from '../../atoms/Icon/Icon'
import './SupportInfo.css'

type SupportInfoProps = {
  phone: string
  note?: string
}

/** Molecule: headphone icon + support phone number. */
function SupportInfo({ phone, note = '24/7 Support Center' }: SupportInfoProps) {
  return (
    <div className="support-info">
      <Icon name="headphone" size={30} className="support-info__icon" />
      <div className="support-info__text">
        <a className="support-info__phone" href={`tel:${phone}`}>
          {phone}
        </a>
        <span className="support-info__note">{note}</span>
      </div>
    </div>
  )
}

export default SupportInfo
