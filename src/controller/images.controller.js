import request from "../httpRequest.js";
import { BaseController } from "./base.controller.js";

export class ImageController extends BaseController {
  async uploadImage() {
    const response = await request.post(
      { url: "images/upload" },
      { headers: { Authorization: `Bearer ${this.params.token}` } },
      { body }
    );
    return response;
    }
}
