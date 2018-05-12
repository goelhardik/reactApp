using System;

// ADD THIS PART TO YOUR CODE
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;
using backend.Models;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace backend
{
    public static class DocumentDBRepository
    {
        private const string EndpointUri = "https://goelhardik.documents.azure.com:443/";
        private const string PrimaryKey = "XW4nWst4u4828p8wiMqKtTqR4yn62SePVdWIWZAXhKLkWCg3XPBZrADopcCJPyWVnzpBOXJ5ykGXyiXfXuMVFQ==";
        private static DocumentClient client = null;
        private const string DatabaseName = "VedantaDB";
        private const string CollectionName = "VedantaCollection";

        public static async Task Initialize()
        {

            client = new DocumentClient(new Uri(EndpointUri), PrimaryKey);
            await client.CreateDatabaseIfNotExistsAsync(new Database { Id = DatabaseName });
            await client.CreateDocumentCollectionIfNotExistsAsync(UriFactory.CreateDatabaseUri(DatabaseName), new DocumentCollection { Id = CollectionName });
        }

        public static async Task CreateDocument(JObject doc)
        {
            await client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName), doc);
        }

        public static IEnumerable<GraphDoc> ReadDocument()
        {
            FeedOptions queryOptions = new FeedOptions { MaxItemCount = -1 };

            IQueryable<GraphDoc> query = client.CreateDocumentQuery<GraphDoc>(
                UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName),
                queryOptions)
                .Where(d => d.VerseId == "3.4");

            var docs = query.ToList();
            return docs;
        }
    }
}
