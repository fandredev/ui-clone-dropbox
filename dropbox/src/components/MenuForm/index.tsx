import React from 'react'
import { Container, Navigation, DropboxLogo, Form } from './styled'


const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button id="action--close" onClick={handleToggle}>X</button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span>
          ou
        <span className="subtitle"> acesse sua conta</span>
        </span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Senha" />
        <button>Prosseguir</button>
        <span className="terms">Esta página é protegida pelo reCAPTCHA e está sujeita à Política de privacidade e aos Termos de serviço do Google.</span>
      </Form>
    </Container>
  )
}
export default MenuForm