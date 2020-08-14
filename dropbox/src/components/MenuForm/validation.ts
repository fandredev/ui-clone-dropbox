import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome precisa ser preenchido.'),
  surname: Yup.string().required('Sobrenome precisa ser preenchido.'),
  email: Yup.string().required('Email precisa ser preenchido.').email('Email precisa ser válido.'),
  password: Yup.string().required('Senha precisa ser preenchida.'),
})
export default schema;