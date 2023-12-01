import './header.style.css'

import { MenuIcon } from '../../ui/icons'
import headerLogo from '../../public/images/logo/logo-jovenes-simple.png'

export const HeaderComponent = () => {
  return (
    <div className='header-component'>
      <div className='header-container'>
        <div className='header-container--logo'>
          <img src={headerLogo} alt="" />
        </div>
        <div className='header-container--menu'>
          <button onClick={() => {alert('👷‍♂️ En desarrollo... ⚒️🔧')}}>
            <MenuIcon size='32px' fill='red' />
          </button>
        </div>
      </div>
    </div>
  )
}