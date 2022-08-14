import { SignUpController } from '../../../src/presentation/controllers/signup'

describe('SingUp Controller', () => {
  // Validar se os dados são enviados da forma correta - Name
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: "any_name",
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status).toEqual(400)
  })
})
