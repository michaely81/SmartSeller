using Orders.Api.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Orders.Api.Services
{
    public class CategoriesService
    {
        private readonly IMongoCollection<Category> _categories;

        public CategoriesService(IOrdersDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _categories = database.GetCollection<Category>(settings.CategoriesCollectionName);
        }

        public List<Category> Get() => _categories.Find(Category => true).ToList();

        public Category Get(string id) => _categories.Find(Category => Category.Id == id).FirstOrDefault();

  
    }
}