import { randomUUID } from "crypto";
import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import {
  buildOpportunityResponse,
  buildResponse,
  parseOpportunityPayload
} from "../lib/opportunity.js";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const payload = parseOpportunityPayload(event.body);

    const response = buildOpportunityResponse(
      payload.partnerOpportunityId ?? randomUUID(),
      "CREATED",
      payload
    );

    return buildResponse(201, response);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return buildResponse(400, { message });
  }
};
