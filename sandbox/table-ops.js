const AWS = require('aws-sdk');
AWS.config.update({
    region: 'eu-west-1'
});

const dynamodb = new AWS.DynamoDB();

//List Table Operation

var params = {};
dynamodb.listTables(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});

//Describe Table Operation

// var params = {
//     TableName: "td_notes"
// };
// dynamodb.describeTable(params, (err, data) => {
//     if (err) {
//         console.log(err, err.stack);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//Create Table Operation

// var params = {
//     AttributeDefinitions: [{
//             AttributeName: "user_id",
//             AttributeType: "S"
//         },
//         {
//             AttributeName: "timestamp",
//             AttributeType: "S"
//         }
//     ],
//     KeySchema: [{
//             AttributeName: "user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName: "timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//     },
//     TableName: "td_notes"
// };
// dynamodb.createTable(params, (err, data) => {
//     if (err) {
//         console.log(err, err.stack);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// var params = {
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 5,
//         WriteCapacityUnits: 5
//     },
//     TableName: "td_notes"
// };
// dynamodb.updateTable(params, (err, data) => {
//     if (err) {
//         console.log(err, err.stack);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// var params = {
//     TableName: "td_notes"
// };
// dynamodb.deleteTable(params, (err, data) => {
//     if (err) {
//         console.log(err, err.stack);
//     } else {
//         console.log(data);
//     }
// });