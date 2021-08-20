import { expect } from "chai";
import { ApiClient } from "../src/apiClient.js";
import { user } from "../src/data/user.js";
import { randomNumber } from "../src/common/utils/helper.js";

describe("Suite - /clan route", function () {
 

  it("get all clans list", async () => {
    const apiClient = await ApiClient.authorized(user);
    const { statusCode, body } = await apiClient.clan.getAllClans();
    expect(statusCode).to.be.eql(200);
  });

  xit("create a clan", async () => { //doesn't work, will investigate problem
    const apiClient = await ApiClient.authorized(user);
    const { statusCode } = await apiClient.clan.createClan(`QaClan${randomNumber}`, "true", 20);
    expect(statusCode).to.be.eql(200);
  })
});
