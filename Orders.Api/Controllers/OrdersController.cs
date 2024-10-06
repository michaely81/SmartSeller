using Microsoft.AspNetCore.Mvc;

namespace Orders.Api.Controllers
{
    public class OrdersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
