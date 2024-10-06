using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Orders.Api.Models
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("ProductName")]
        public string ProductName { get; set; }

        [BsonElement("CategoryId")]
        public int CategoryId { get; set; }

    }
}