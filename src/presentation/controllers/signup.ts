export class SignUpController {
  handle(httpRequest: any): any {
    return {
      status: 400,
      body: new Error('Missing param: name')
    }
  }
}
