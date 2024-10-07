using Microsoft.AspNetCore.Mvc;
using Orders.Api.Models;
using Orders.Api.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Orders.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly CategoriesService _categoriesService;

        public CategoriesController(CategoriesService categoriesService)
        {
            _categoriesService = categoriesService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            var data = _categoriesService.Get();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(string id)
        {
            var data = _categoriesService.Get(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
