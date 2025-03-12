const request = require("supertest");
const app = require("../server");

test("GET /data should return paginated data", async () => {
    const response = await request(app).get("/data?page=1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body.data)).toBe(true);
});
