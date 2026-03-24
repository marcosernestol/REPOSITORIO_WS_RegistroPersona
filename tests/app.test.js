const request = require('supertest');
const app = require('../app');

describe('WS_RegistroPersona', () => {
  it('responde mensaje de bienvenida en la ruta raiz', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain('Bienvenido WS_RegistroPersona');
  });
});
