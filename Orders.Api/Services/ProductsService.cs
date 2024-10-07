using Orders.Api.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Orders.Api.Services
{
    public class ProductsService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductsService(IOrdersDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.ProductsCollectionName);
        }

        public List<Product> Get() => _products.Find(Product => true).ToList();

        public Product Get(string id) => _products.Find(Product => Product.Id == id).FirstOrDefault();
       
    }
}