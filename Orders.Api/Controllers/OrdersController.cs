﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(string id)
        {
            var data = _orderService.Get(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
