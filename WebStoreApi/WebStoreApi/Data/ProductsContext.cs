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

            modelBuilder.Entity<Rating>()
                .HasOne(p => p.Product)
                .WithOne(r => r.Rating)
                .HasForeignKey<Product>(k => k.ProductId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
