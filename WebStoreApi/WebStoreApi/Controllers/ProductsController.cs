using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebStoreApi.Data;
using WebStoreApi.Models;
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
            try
            {
                List<Product> products = ContextProvider.db.Products.ToList();
                return products;
            }
            catch (Exception)
            {
                return new List<Product>();
            }
        }

        [HttpGet("prodById")]
        public Product ProductById(int id)
        {
            try
            {
                Product product = ContextProvider.db.Products.ToList().First(p => p.ProductId == id);
                return product;
            }
            catch (Exception)
            {
                return new Product();
            }
        }

        //[HttpPost("newProduct")]
        //public void AddProduct(string title, string description, string category, double price, string image, double rate, int count)
        //{
        //    try
        //    {
        //        ContextProvider.db.Add(new Product { Rating = new Rating { Rate = rate, Count = count }, Title = title, Description = description, Category = category, Price = price, Image = image });
        //        ContextProvider.db.SaveChanges();
        //    }
        //    catch (Exception)
        //    {
        //    }
        //}
        [HttpPost("newProduct")]
        public void AddProduct(ProductAdd product)
        {
            try
            {
                ContextProvider.db.Add(new Product { Rating = new Rating { Rate = product.Rate, Count = product.Count }, Title = product.Title, Description = product.Description, Category = product.Category, Price = product.Price, Image = product.Image });
                ContextProvider.db.SaveChanges();
            }
            catch (Exception)
            {
            }
        }

        [HttpDelete("deleteProduct")]
        public void DeleteProduct(DeleteProduct deleteProduct)
        {
            try
            {
                var prodToDelete = ContextProvider.db.Products.FirstOrDefault(p => p.ProductId == deleteProduct.ProductId);
                if (prodToDelete != null)
                {
                    ContextProvider.db.Remove(prodToDelete);
                }
                ContextProvider.db.SaveChanges();
            }
            catch (Exception)
            {
            }
        }

        [HttpPut("modifyProduct")]
        public void ModifyProduct(ModifyProduct modifyProduct)
        {
            try
            {
                var prodToModify = ContextProvider.db.Products.FirstOrDefault(p => p.ProductId == modifyProduct.ProductId);
                if (prodToModify != null)
                {
                    prodToModify.Category = modifyProduct.Category;
                    prodToModify.Price = modifyProduct.Price;
                    prodToModify.Description = modifyProduct.Description;
                    prodToModify.Image = modifyProduct.Image;
                    prodToModify.Title = modifyProduct.Title;
                    ContextProvider.db.Products.Update(prodToModify);
                }
                ContextProvider.db.SaveChanges();
            }
            catch (Exception)
            {
            }
        }
    }
}