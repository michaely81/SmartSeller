namespace Orders.Api.Models
{
    public class OrdersDatabaseSettings : IOrdersDatabaseSettings
    {
        public string CategoriesCollectionName { get; set; }
        public string ProductsCollectionName { get; set; }
        public string OrdersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IOrdersDatabaseSettings
    {
        string CategoriesCollectionName { get; set; }
        string ProductsCollectionName { get; set; }
        string OrdersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}