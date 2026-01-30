import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import {
  buildOpportunityResponse,
  buildResponse,
  parseOpportunityPayload
} from "../lib/opportunity.js";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const payload = parseOpportunityPayload(event.body);
    const opportunityId = event.pathParameters?.id;

    if (!opportunityId) {
      return buildResponse(400, { message: "Missing path parameter 'id'" });
    }

    const response = buildOpportunityResponse(
      opportunityId,
      "UPDATED",
      payload
    );

    return buildResponse(200, response);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return buildResponse(400, { message });
  }
};
