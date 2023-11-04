import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create an S3 bucket
    const bucket = new sst.Bucket(this, "My-Mate-Uploads");
    const myMateFunction = new sst.Function(this, "My-Mate-Function", {
      deadLetterQueueEnabled: true,
    });
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /": "src/lambda.handler",
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      "ApiEndpoint": api.url,
    });
  }
}
