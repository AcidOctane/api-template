import { user } from "../data/user.js";
import request from "../httpRequest.js";
import { BaseController } from "./base.controller.js";

export class FollowerController extends BaseController {
  async getFollowers() {
    const response = await request.get(
      { url: `followers/followers/${user.id}` },
      { headers: { Authorization: `Bearer ${this.params.token}` } }
    );

    return response;
    }

    async getFollowings() {
      const response = await request.get(
        { url: `followers/following/${user.id}` },
        { headers: { Authorization: `Bearer ${this.params.token}` } }
      );
  
      return response;
      }
  }
