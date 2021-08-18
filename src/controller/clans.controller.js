import request from "../httpRequest.js";
import { BaseController } from "./base.controller.js";

export class ClanController extends BaseController {
  async getAllClans() {
    const response = await request.get(
      { url: "clan/" },
      { headers: { Authorization: `Bearer ${this.params.token}` } }
    );
    return response;
    }
  async createClan(clanname, isPublic, maxMembers) {
    const response = await request.post(
      { url: "clan/" },
      { headers: { Authorization: `Bearer ${this.params.token}` } },
      { body: {"name" : clanname, "isPublic" : isPublic, "maxMembers" : maxMembers } }
    );
    return response;
  }
}
