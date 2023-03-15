using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Lambda.Core;
using System.Threading.Tasks;

namespace AwsDotnetCsharp
{
    public class HandlerDynamodbTest
    {

        // https://automationrhapsody.com/aws-examples-in-c-basic-dynamodb-operations/
        public async Task<Response> GetTest(Request request)
        {
            AmazonDynamoDBClient client = new AmazonDynamoDBClient();
            var table = Table.LoadTable(client, "tableName");
            var document = await table.GetItemAsync(new Primitive("documentKey"));
            return new Response("Get Test! " + document["test"].AsString(), request);
        }
        public Response PutTest(Request request)
        {
            return new Response("Put Test!", request);
        }
    }
}
