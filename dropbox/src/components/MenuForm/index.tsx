import React from 'react'
import { Container, Navigation, DropboxLogo, Form } from './styled'
import { Formik, Field, ErrorMessage } from 'formik'
import schema from './validation'
const MenuForm: React.FC = () => {

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }
  function onSubmit(values: string) {
    console.log(values, 'Valores')
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
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: ''
        }}
        onSubmit={(values: any) => onSubmit(values)}
        validateSchema={schema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
            <Form onSubmit={handleSubmit}>
              <span className="title">Registre-se</span>
              <span>
                ou
              <span className="subtitle"> acesse sua conta</span>
              </span>
              <Field component="input" type="text" onBlur={handleBlur} id='name' value={values.name} onChange={handleChange} placeholder="Nome" />
              <ErrorMessage name="email" component="p" />

              <Field component="input" type="text" onBlur={handleBlur} value={values.surname} name='surname' onChange={handleChange} placeholder="Sobrenome" />
              <ErrorMessage name="surname" component="p" />

              <Field component="input" type="email" onBlur={handleBlur} value={values.email} name='email' onChange={handleChange} placeholder="E-mail" />
              <ErrorMessage name="email" component="p" />

              <Field component="input" type="password" onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} placeholder="Senha" />
              <ErrorMessage name="password" component="p" />


              <button>Prosseguir</button>
              <span className="terms">Esta página é protegida pelo reCAPTCHA e está sujeita à Política de privacidade e aos Termos de serviço do Google.</span>
            </Form>
          )}
      </Formik>
    </Container>
  )
}
export default MenuForm