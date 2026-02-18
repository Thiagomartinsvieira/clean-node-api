import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpCOntroller {
  handle(httprequest: HttpRequest): HttpResponse {
    if (!httprequest.body.name) {
      return {
        statusCode: 400,
        body: new Error("Missingg param: name"),
      };
    }

    if (!httprequest.body.email) {
      return {
        statusCode: 400,
        body: new Error("Missingg param: email"),
      };
    }

    return {
      statusCode: 200,
      body: "OK",
    };
  }
}
