using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace WebStoreApi.Data
{
    public class ProductsContextFactory : IDesignTimeDbContextFactory<ProductsContext>
    {
        public ProductsContext CreateDbContext(string[] args)
        {
            string connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=WebStoreDb;Integrated Security=True;MultipleActiveResultSets=true";
            var optionsBuilder = new DbContextOptionsBuilder<ProductsContext>();
            var options = optionsBuilder
                .UseLazyLoadingProxies()
                .UseSqlServer(connectionString)
                .Options;

            return new ProductsContext(options);
        }
    }
}
