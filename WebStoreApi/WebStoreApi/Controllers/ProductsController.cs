﻿using Microsoft.AspNetCore.Http;
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

        [HttpPost("newProduct")]
        public void AddProduct(string title, string description, string category, double price, string image, double rate, int count)
        {
            try
            {
                ContextProvider.db.Add(new Product { Rating = new Rating { Rate = rate, Count = count }, Title = title, Description = description, Category = category, Price = price, Image = image });
                ContextProvider.db.SaveChanges();
            }
            catch (Exception)
            {
            }
        }
    }
}