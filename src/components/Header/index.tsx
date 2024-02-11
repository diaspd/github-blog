import { HeaderContainer } from './styles'

import Logo from '../../../public/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="logo" />
        <h1>GITHUB BLOG</h1>
      </div>
    </HeaderContainer>
  )
}
