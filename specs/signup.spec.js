import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { newUser } from "../src/data/user.js";

describe("Suite - /auth/register route", function () {
  xit("should be albe to register", async () => {
    const apiClient = ApiClient.unauthorized();
    const { body, statusCode } = await apiClient.user.register(newUser);
    //console.log(body);
    expect(statusCode).to.be.eql(200);
    expect(body.user.email).to.be.eql(newUser.email);
  });
});
