using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Orders.Api.Models
{
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("OrderName")]
        public string OrderName { get; set; }

        [BsonElement("FirstName")]
        public string FirstName { get; set; }

        [BsonElement("LastName")]
        public string LastName { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Quanitity")]
        public int Quanitity { get; set; }

        [BsonElement("ProductId")]
        public int ProductId { get; set; }

    }
}