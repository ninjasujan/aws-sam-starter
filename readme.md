## AWS SAM (Serverless Application Model)

---

### 1. Sample Hello World function with SAM

1. Install SAM CLI and Docker in your system.
2. `sam init` - to initiate sam lambda starter template
3. Edit template.yaml file according to your preference
4. start api locally to test - `sam local start-api`.
   it will create docker image locally and open the api end point in port.
   We can skip creating image all the time using `--skip-pull-image`
5. Push the lambda function to the AWS cloud formation stack `sam deploy --guided`

---

### 2. Adding Lambda Authorizer in Api Gateway

1. Create a separate lambda function for handling authorization
2. Add Authorization code (refer authorization code in repo)
3. deploy the function
4. Link the Authorizer in Api Gateway - refer template.yaml
   Link method ARN in API gateway
