import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { learningCoachAgent } from "./agents/learningCoachAgent";
import { createLogger } from "@mastra/core/logger";
import { a2aAgentRoute } from "./a2a/a2aAgentRoutes";

export const mastra = new Mastra({
  agents: { devCoach: learningCoachAgent },

  storage: new LibSQLStore({
    // stores observability, scores, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: createLogger({ name: "Mastra", level: "info" }),
  observability: { default: { enabled: true } },

  // 3. Register the Custom A2A Route
  server: {
    // The build settings are optional but good for local debugging
    build: {
      openAPIDocs: true,
      swaggerUI: true,
    },
    apiRoutes: [a2aAgentRoute], // <-- CRITICAL: Tells Mastra to use your A2A handler
  },
});
