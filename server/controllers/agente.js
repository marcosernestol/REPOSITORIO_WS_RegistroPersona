const axios = require('axios');

function getSystemPrompt() {
  return (
    process.env.AGENT_SYSTEM_PROMPT ||
    'Eres un asistente util, claro y orientado a tareas para una app de registro de personas.'
  );
}

function normalizeContent(content) {
  if (typeof content === 'string') {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === 'string') {
          return part;
        }

        if (part && typeof part === 'object' && typeof part.text === 'string') {
          return part.text;
        }

        return '';
      })
      .join('\n')
      .trim();
  }

  return '';
}

async function invokeAgent(req, res) {
  return invokeOllamaAgent(req, res);
}

async function invokeOllamaAgent(req, res) {
  try {
    const message = String(req.body?.message || '').trim();

    if (!message) {
      return res.status(400).send({
        ok: false,
        message: 'Debes enviar { "message": "..." } en el body.',
      });
    }

    const ollamaModel = process.env.OLLAMA_MODEL || 'llama3.2';
    const baseUrl = process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434';
    const prompt = `${getSystemPrompt()}\n\nUsuario: ${message}\nAsistente:`;
    const response = await axios.post(
      `${baseUrl}/api/generate`,
      {
        model: ollamaModel,
        prompt,
        stream: false,
      },
      { timeout: 120000 }
    );

    return res.status(200).send({
      ok: true,
      model: `ollama:${ollamaModel}`,
      reply: normalizeContent(response?.data?.response),
    });
  } catch (error) {
    return res.status(500).send({
      ok: false,
      message: 'Error al ejecutar el agente.',
      detail: String(error?.message || error),
    });
  }
}

async function invokeGoogleLangChainAgent(req, res) {
  try {
    const message = String(req.body?.message || '').trim();

    if (!message) {
      return res.status(400).send({
        ok: false,
        message: 'Debes enviar { "message": "..." } en el body.',
      });
    }

    const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).send({
        ok: false,
        message: 'Falta GOOGLE_API_KEY (o GEMINI_API_KEY) en variables de entorno.',
      });
    }

    const { ChatGoogleGenerativeAI } = await import('@langchain/google-genai');
    const { SystemMessage, HumanMessage } = await import('@langchain/core/messages');
    const modelName = process.env.GOOGLE_MODEL || 'gemini-1.5-flash';
    const model = new ChatGoogleGenerativeAI({
      model: modelName,
      apiKey,
      temperature: 0.3,
    });

    const result = await model.invoke([
      new SystemMessage(getSystemPrompt()),
      new HumanMessage(message),
    ]);

    return res.status(200).send({
      ok: true,
      model: `google:${modelName}`,
      reply: normalizeContent(result?.content),
    });
  } catch (error) {
    return res.status(500).send({
      ok: false,
      message: 'Error al ejecutar el agente LangChain con Google.',
      detail: String(error?.message || error),
    });
  }
}

module.exports = {
  invokeAgent,
  invokeOllamaAgent,
  invokeGoogleLangChainAgent,
};
