import { mockRequest, mockResponse } from '../../util/mockInterceptor'
import { getHealthCheck } from '../healthcheck'

describe('HealthCheck Controllers functions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should getHealthCheck success',() => {
    const req = mockRequest()
    const res = mockResponse()

    getHealthCheck(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
  })
})