using Orders.Api.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Orders.Api.Services
{
    public class OrdersService
    {
        private readonly IMongoCollection<Order> _orders;

        public OrdersService(IOrdersDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _orders = database.GetCollection<Order>(settings.OrdersCollectionName);
        }

        public List<Order> Get() => _orders.Find(Order => true).ToList();

        //public Order Get(string id) => _orders.Find(Order => Order.Id == id).FirstOrDefault();

        public Order Create(Order Order)
        {
            _orders.InsertOne(Order);
            return Order;
        }

        //public void Update(string id, Order updatedOrder) => _orders.ReplaceOne(Order => Order.Id == id, updatedOrder);

        //public void Delete(Order OrderForDeletion) => _orders.DeleteOne(Order => Order.Id == OrderForDeletion.Id);

        //public void Delete(string id) => _orders.DeleteOne(Order => Order.Id == id);
    }
}