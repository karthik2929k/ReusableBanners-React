// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className={`${className} banner-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button-el" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
