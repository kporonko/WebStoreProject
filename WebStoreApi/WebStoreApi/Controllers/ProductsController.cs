using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebStoreApi.Data;
using WebStoreApi.ModelsEF;

namespace WebStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet("getAllProducts")]
        public List<Product> GetProducts()
        {
            List<Product> products = ContextProvider.db.Products.ToList();
            return products;
        }

        [HttpGet("prodById")]
        public Product ProductById(int id)
        {
            Product product = ContextProvider.db.Products.ToList().First(p => p.ProductId == id);
            return product;
        }
    }
}