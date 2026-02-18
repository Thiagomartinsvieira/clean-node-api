export class SignUpCOntroller {
  handle(httprequest: any): any {
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
  }
}
