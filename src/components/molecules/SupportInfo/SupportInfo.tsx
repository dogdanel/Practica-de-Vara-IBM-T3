import { HeadphoneIcon } from '../../atoms/Icons'
import './SupportInfo.css'

type SupportInfoProps = {
  phone: string
  note?: string
}

function SupportInfo({ phone, note = '24/7 Support Center' }: SupportInfoProps) {
  return (
    <div className="support-info">
      <HeadphoneIcon size={30} className="support-info__icon" />
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
