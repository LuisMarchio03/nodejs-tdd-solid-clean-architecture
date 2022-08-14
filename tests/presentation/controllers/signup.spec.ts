import { SignUpController } from '../../../src/presentation/controllers/signup'
import { MissingParamError } from '../../../src/presentation/errors/missing-param-error'

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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  // Validar se os dados são enviados da forma correta - E-mail
  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        // email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status).toEqual(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  // Validar se os dados são enviados da forma correta - Password
  test('Should return 400 if no password is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        // password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status).toEqual(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  // Validar se os dados são enviados da forma correta - Password Confirmation
  test('Should return 400 if no password confirmation is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password'
        // passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status).toEqual(400)
    expect(httpResponse.body).toEqual(
      new MissingParamError('passwordConfirmation')
    )
  })
})
