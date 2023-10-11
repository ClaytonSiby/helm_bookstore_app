import { CSSProperties, FC } from 'react'
import { ClipLoader } from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

const LoadingSpinner: FC = () => {
  return (
    <div className="loading-spinner">
      <ClipLoader color="#36d7b7" cssOverride={override} />
    </div>
  )
}

export default LoadingSpinner
