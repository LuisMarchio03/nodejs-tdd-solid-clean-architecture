import { MissingParamError } from '../errors/missing-param-error'
import { httpRequest, httpResponse } from '../protocols/http'

export class SignUpController {
  handle(httpRequest: httpRequest): httpResponse {
    if (!httpRequest.body.name) {
      return {
        status: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        status: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
