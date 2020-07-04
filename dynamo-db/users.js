{
    TableName: "Users",
        KeySchema: [
            {
                AttributeName: "id",
                KeyType: "HASH", //Partition key
            }
        ],
            AttributeDefinitions: [
                {
                    AttributeName: "id",
                    AttributeType: "N"
                },
                {
                    AttributeName: "name",
                    AttributeType: "S"
                }
            ]
}
