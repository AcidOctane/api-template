import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { user } from "../src/data/user.js";

describe("Suite - /clan route", function () {
 

  xit("get all clans list", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode, body } = await apiClient.clan.getAllClans();
    console.log(body);
    expect(statusCode).to.be.eql(200);
  });

  xit("create a clan", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode } = await apiClient.clan.createClan("QaClan", "true", 20);
    expect(statusCode).to.be.eql(200);
  })
});
