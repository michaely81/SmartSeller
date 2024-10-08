using Microsoft.AspNetCore.Mvc;
using Orders.Api.Models;
using Orders.Api.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Orders.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private readonly OrdersService _orderService;

        public OrdersController(OrdersService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetOrders()
        {
            var data = _orderService.Get();
            return Ok(data);
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<Order>> GetOrder(string id)
        //{
        //    var data = _orderService.Get(id);
        //    if (data == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(data);
        //}

        [HttpPost]
        public async Task<ActionResult<Order>> Create(Order order)
        {
            order = _orderService.Create(order);

            return Ok(order);
        }

        //[HttpPut("{id:length(24)}")]
        //public async Task<IActionResult> Update(string id, Order updatedOrder)
        //{
        //    Order order =  _orderService.Get(id);

        //    if (order == null)
        //    {
        //        return NotFound();
        //    }

        //    updatedOrder.Id = order.Id;

        //    _orderService.Update(id, updatedOrder);

        //    return NoContent();
        //}

        //[HttpDelete("{id:length(24)}")]
        //public async Task<IActionResult> Delete(string id)
        //{
        //     _orderService.Delete(id);

        //    return NoContent();
        //}
    }
}
