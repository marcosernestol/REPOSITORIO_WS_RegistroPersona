const {
  invokeAgent,
  invokeOllamaAgent,
  invokeGoogleLangChainAgent,
} = require('../controllers/agente');

module.exports = (app) => {
  app.post('/api/agent/invoke', invokeAgent);
  app.post('/api/agent/ollama/invoke', invokeOllamaAgent);
  app.post('/api/agent/google/invoke', invokeGoogleLangChainAgent);
};
