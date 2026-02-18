export class SignUpCOntroller {
  handle(httprequest: any): any {
    return {
      statusCode: 400,
      body: new Error("Missingg param: name"),
    };
  }
}
