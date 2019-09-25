const AWS = require('aws-sdk');
AWS.config.update({
    'region': 'eu-west-1'
})

const docClient = new AWS.DynamoDB.DocumentClient();

// Conditional Expressions - Gives error if condition fails

var params = {
    TableName: 'td_notes_sdk',
    Item: {
        user_id: '1',
        timestamp: 1,
        title: 'My note 1 updated again',
        content: 'content for note 1 updated again'
    },
    ConditionExpression: '#t = :t',
    ExpressionAttributeNames: {
        '#t': 'timestamp'
    },
    ExpressionAttributeValues: {
        ':t': 1
    }

}

docClient.put(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});