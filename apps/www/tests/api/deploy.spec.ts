import { assert, describe, expect, it } from "vitest";

import axios from "redaxios";

const request = axios.create({
  baseURL: process.env.WWW_URL,
  validateStatus: () => true,
});

describe("/api/deploy", () => {
  it("should return 400 if the request body is invalid", async () => {
    const response = await request.get("/api/deploy");
    expect(response.status).toBe(400);
  });
});
