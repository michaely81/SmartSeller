using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Orders.Api.Models
{
    public class Category
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("CategoryName")]
        public string CategoryName { get; set; }

        [BsonElement("CategoryType")]
        public int CategoryType { get; set; }
    }
}