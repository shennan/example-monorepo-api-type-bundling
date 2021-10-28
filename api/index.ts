/**
 * The payload which the endpoint can receive.
 */
export type EndpointArgumentType = {
  resourceId: string
  body: Record<string, unknown>
}

/* Some code which mounts an endpoint with an express server and does something with the payload... */