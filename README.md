# AWSDynamoDBDemo
Accessing DynamoDB using nodeJS

# General Note
    Commands to run:
        * To specify which profile to work with:
            export AWS_PROFILE="subhpersonal" && export AWS_REGION=eu-west-1
        * To verify if the profile we set is properly set up.
            aws sts get-caller-identity

# AWS.DynamoDB
  - Class documentation can be found here. https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html

  # table-ops.js
    - List Table Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#listTables-property
    - Describe Table Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeTable-property
    - Create Table Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property
    - Update Table Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateTable-property
    - Delete Table Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteTable-property


# AWS.DynamoDB.DocumentClient
    - Class documentation can be found here. https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html

    # write-ops.js
      - PUT Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property
      - UPDATE Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#update-property
      - DELETE Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#delete-property
      - BATCHWRITE Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#batchWrite-property

    # read-ops.js
      - GET Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
      - QUERY Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property
      - SCAN Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property
      - BATCHGET Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#batchGet-property

    # conditional.js
      - CONDITIONAL PUT Operation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property


