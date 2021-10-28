import { EndpointArgumentType } from 'api'

export const boot = (request: EndpointArgumentType) => {

  console.log(request)

  /* call to the api via fetch with the request object */

}

boot({
  resourceId: 'some-resource',
  body: {
    foo: 'bar'
  }
})