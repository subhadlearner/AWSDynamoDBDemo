const AWS = require('aws-sdk');
AWS.config.update({
    'region': 'eu-west-1'
})

const docClient = new AWS.DynamoDB.DocumentClient();

//GET Operation

// var params = {
//     TableName: 'td_notes',
//     Key:{
//         user_id: 'lmnsdfa8542316564as',
//         timestamp: 3
//     }
// };
// docClient.get(params, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//QUERY Operation - Notice scanned count = 1 - Efficient

// var params = {
//     TableName: 'td_notes',
//     KeyConditionExpression: 'user_id= :uid',
//     ExpressionAttributeValues: {
//         ':uid': 'lmnsdfa8542316564as'
//     }
// };
// docClient.query(params, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//SCAN Operation - Notice scanned count = number of item - Inefficient

// var params = {
//     TableName: 'td_notes',
//     FilterExpression: 'content=:c',
//     ExpressionAttributeValues: {
//         ':c': 'content for note 1'
//     }
// }

// docClient.scan(params, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//BatchGet Operation

var params = {
    RequestItems: {
        'td_notes': {
          Keys: [
            {
               user_id: 'ashgvfx64489416',
               timestamp: 1
            },
            {
                user_id: 'zxv7894521365',
                timestamp: 4
            }
          ]
        },
        'td_notes_sdk': {
          Keys: [
            {
                user_id: '2',
                timestamp: 2
            }
          ]
        }
    }

}

docClient.batchGet(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});