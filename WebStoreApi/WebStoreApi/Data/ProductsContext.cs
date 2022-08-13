using Microsoft.EntityFrameworkCore;
using WebStoreApi.Configurations;
using WebStoreApi.ModelsEF;

namespace WebStoreApi.Data
{
    public class ProductsContext : DbContext
    {
        public ProductsContext(DbContextOptions<ProductsContext> options)
            : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Rating> Ratings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new RatingConfiguration());

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Rating)
                .WithOne(r => r.Product)
                .HasForeignKey<Rating>(k => k.ProductId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
