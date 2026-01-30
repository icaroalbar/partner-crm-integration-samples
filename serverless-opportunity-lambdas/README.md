# Serverless Opportunity Lambdas (AWS Partner CRM)

This sample shows how to build two AWS Lambda functions (create and update) with **Serverless Framework v4**, **Node.js**, and **TypeScript**. It follows the opportunity payloads used in this repository (see `opportunity-samples/Opportunity-Create-Inbound-Sample.json`).

## What is included

- `createOpportunity` (`POST /opportunities`): accepts a JSON payload and returns a created response.
- `updateOpportunity` (`PUT /opportunities/{id}`): accepts a JSON payload and returns an updated response.

Both handlers are intentionally simple and meant to be wired to the AWS Partner Central API or your CRM service in real implementations.

## Quick start

```bash
cd serverless-opportunity-lambdas
npm install
serverless deploy
```

## Local example payload

Use the sample payload from the repository:

```bash
cat ../opportunity-samples/Opportunity-Create-Inbound-Sample.json
```

## Notes

- Update the `provider.region` and other settings in `serverless.yml` as needed.
- Add authentication/authorization (e.g., JWT or IAM authorizers) for production use.
