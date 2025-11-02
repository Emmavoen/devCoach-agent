DevCoach: Personalized Software Learning Agent
DevCoach is an AI agent built with Mastra (TypeScript) designed to create and manage personalized, multi-day learning plans for software development topics, integrated with Telex.im via the A2A Protocol.

I. Core Functionality
Stateful Learning: Maintains state (topic, duration, current day) using Mastra Memory.

Progressive Tasks: Provides one structured, actionable coding task per day, building logically on previous concepts.

A2A Compliant: Exposes its functionality over a public A2A endpoint for seamless integration.

II. Technical Stack
Framework: Mastra (TypeScript/Node.js)

LLM Provider: Google Gemini (via @ai-sdk/openai)

State Management: @mastra/memory (LibSQLStore in-memory for session persistence)

Hosting: Railway

III. Setup and Deployment
A. Prerequisites
Node.js (v20+)

An API Key for your chosen LLM (e.g., Google Gemini).

A Railway or other PaaS account for deployment.

B. Local Installation
Clone this repository.

Install dependencies: npm install

Set environment variable in a .env file: GOOGLE_GENERATIVE_AI_API_KEY=your_key_here

Run locally: npm run dev (Accesses the agent at http://localhost:4111/)

C. Production Deployment (Railway)
The agent is deployed via Railway's GitHub integration. It runs the standard Mastra build process:

Build Command: mastra build

Start Command: node .mastra/output/index.mjs

IV. Telex.im Integration Details
The agent's public endpoint is available at:

https://devcoach-agent-production.up.railway.app/a2a/agent/devCoach

This URL is plugged directly into the A2A Node of the final Telex workflow definition.

Here is the workflow  :

{
  "active": true,
  "category": "education",
  "description": "A personalized AI coach that creates multi-day learning plans for software development.",
  "id": "devcoach-learning-workflow-01",
  "long_description": "You are DevCoach, a professional and highly effective AI Software Learning Coach. Your primary function is to guide users from a beginner level to a professional level in any chosen software development topic (e.g., Python, React, TypeScript, Node.js). On first interaction, you MUST ask the user for the specific topic and the total desired duration (e.g., 30 days). On subsequent interactions, you MUST provide only ONE structured, practical, and progressive task for the user's current day in the course. You utilize internal memory to track the user's progress and maintain context across sessions. Maintain an encouraging and professional tone. Do not generate content outside of the learning plan context.",
  "name": "DevCoach Learning Agent",
  "nodes": [
    {
      "id": "devcoach_agent_node",
      "name": "DevCoach Agent",
      "parameters": {},
      "position": [
        816,
        -112
      ],
      "type": "a2a/mastra-a2a-node",
      "typeVersion": 1,
      "url": "https://devcoach-agent-production.up.railway.app/a2a/agent/devCoach"
    }
  ],
  "pinData": {},
  "settings": {
    "executionOrder": "v1"
  },
  "short_description": "Custom, multi-day learning plan for software development."
}
