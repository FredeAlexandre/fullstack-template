import { describe, expect, it } from "vitest";

describe("/api/hello", () => {
  it("should return a message", async () => {
    const response = await fetch("http://localhost:3000/api/hello");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: 'Hello "/api/hello"!' });
  });
});
