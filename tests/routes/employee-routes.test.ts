process.env.JWT_SECRET = 'b13d0d96678a7b7a9c621465a3ee139ebd974f0d5939bad0eb21d71d869f6a41';

import request from 'supertest'
import { sign } from 'jsonwebtoken'

import { mongoHelper } from '@/infra/db'
import { setupApp, env } from '@/main/config'
let app = null;

beforeAll(async () => {
    app = await setupApp();
    await mongoHelper.connect(env.mongoUrl);
})

afterAll(async () => {
    await mongoHelper.disconnect();
});

beforeEach(async () => {
    const employeeCollection = mongoHelper.getCollection('employees')
    await employeeCollection.deleteMany({})
    await employeeCollection.insertOne({ name: "test_name", email: "test@mail.com" });
})

describe('Employee routes', () => {
    const employeesEndpoint = '/api/employees';
    
    it('Should create a new employee', async () => {
        const accessToken = sign({ id: 123 }, env.jwtSecret)
        await request(setupApp())
            .post(employeesEndpoint)
            .set('Authorization', accessToken)
            .send({
                name: 'John Doe',
                email: 'jose@gmail.com',
            })
            .expect(204)
    });

    it('Should return bad request error', async () => {
        const accessToken = sign({ id: 123 }, env.jwtSecret)
        await request(setupApp())
            .post(employeesEndpoint)
            .set('Authorization', accessToken)
            .send({
                name: 'John Doe'
            })
            .expect(400)
    });

    it('Should return "forbidden" error', async () => {
        await request(setupApp())
            .post(employeesEndpoint)
            .set('Authorization', 'invalid_token')
            .send({
                name: 'John Doe'
            })
            .expect(403)
    });

    it('Should return a list of employees', async () => {
        const accessToken = sign({ id: 123 }, env.jwtSecret)
        const response = await request(setupApp())
            .get(employeesEndpoint)
            .set('Authorization', accessToken)
            .expect(200);
        
        const expectedObj = expect.objectContaining({ name: expect.any(String), email: expect.any(String)});
        expect(response.body).toEqual([expectedObj])
    });
});