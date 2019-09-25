const AWS = require('aws-sdk');

AWS.config.update({
    'region': 'eu-west-1'
});

const docClient = new AWS.DynamoDB.DocumentClient();

//PUT operation

// var params = {
//     TableName : 'td_notes',
//     Item: {
//      user_id: 'tyhdswe4578126985',
//      timestamp: 5,
//      title: 'My note 5',
//      content: 'content for note 5'
//   }
// };

// docClient.put(params, (err,data) => {

//     if(err){
//         console.log(err);
//     }else{
//         console.log(JSON.stringify(data,null,2));
//     }
// });

// Update Operation

// var params = {
//     TableName: 'td_notes',
//     Key: {
//         user_id: 'tyhdswe4578126985',
//         timestamp: 5
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': 'Updated note 5'
//     }
// };

// docClient.update(params, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//Delete Operation

// var params = {
//     TableName: 'td_notes',
//     Key: {
//         user_id: 'tyhdswe4578126985',
//         timestamp: 5
//     }
// }
// docClient.delete(params, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//BatchWrite Operation

var params = {
    RequestItems: {
        'td_notes': [{
            DeleteRequest: {
                Key: {
                    user_id: 'jhdkahska151461',
                    timestamp: 2
                }
            }
        }, {
            PutRequest: {
                Item: {
                    user_id: 'lmnsdfa8542316564as',
                    timestamp: 3,
                    title: 'My note 3 - updated',
                    content: 'content of note 3 updated'
                }
            }
        }, {
            PutRequest: {
                Item: {
                    user_id: 'zxv7894521365',
                    timestamp: 4,
                    title: 'My note 4 - updated',
                    content: 'content of note 4 updated'
                }
            }
        }]
    }
}

docClient.batchWrite(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});