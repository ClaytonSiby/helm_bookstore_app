import { CSSProperties, FC } from 'react'
import { RingLoader } from 'react-spinners'
import './styles.scss'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

const LoadingSpinner: FC = () => {
  return (
    <div className="loading-spinner">
      <RingLoader color="#36d7b7" cssOverride={override} />
    </div>
  )
}

export default LoadingSpinner
