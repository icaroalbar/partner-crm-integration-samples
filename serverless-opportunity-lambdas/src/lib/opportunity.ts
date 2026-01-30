export type OpportunityPayload = {
  name: string;
  stage?: string;
  amount?: number;
  closeDate?: string;
  partnerOpportunityId?: string;
  additionalFields?: Record<string, unknown>;
};

export type OpportunityResponse = {
  id: string;
  status: "CREATED" | "UPDATED";
  receivedAt: string;
  payload: OpportunityPayload;
};

export const parseOpportunityPayload = (body?: string | null): OpportunityPayload => {
  if (!body) {
    throw new Error("Missing request body");
  }

  const parsed = JSON.parse(body) as OpportunityPayload;

  if (!parsed.name || typeof parsed.name !== "string") {
    throw new Error("Field 'name' is required and must be a string");
  }

  return parsed;
};

export const buildResponse = (statusCode: number, body: unknown) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body, null, 2)
});

export const buildOpportunityResponse = (
  id: string,
  status: OpportunityResponse["status"],
  payload: OpportunityPayload
): OpportunityResponse => ({
  id,
  status,
  receivedAt: new Date().toISOString(),
  payload
});
