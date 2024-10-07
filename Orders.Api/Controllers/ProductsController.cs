using Microsoft.AspNetCore.Mvc;
using Orders.Api.Models;
using Orders.Api.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Orders.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsService _productService;

        public ProductsController(ProductsService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var data =  _productService.Get();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(string id)
        {
            var data =  _productService.Get(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
