import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { user } from "../src/data/user.js";
import { invalidUser } from "../src/data/user.js";

describe("Suite - /auth/login route", function () {
  it("should be albe to login", async () => {
    const apiClient = ApiClient.unauthorized();
    const { body, statusCode } = await apiClient.user.login(user);

    expect(statusCode).to.be.eql(200);
    expect(body.user.email).to.be.eql(user.email);
  });
  
  it("shouldn't be albe to login", async () => {
    try {
      const apiClient = ApiClient.unauthorized();
    }
    catch(err) {
      expect(err).to.eql(new Error('Response code 401 (Unauthorized)')); 
    }
  });
});
