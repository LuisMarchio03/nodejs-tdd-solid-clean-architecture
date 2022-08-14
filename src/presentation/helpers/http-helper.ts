import { httpResponse } from '../protocols/http'

export const badRequest = (error: Error): httpResponse => ({
  status: 400,
  body: error
})
