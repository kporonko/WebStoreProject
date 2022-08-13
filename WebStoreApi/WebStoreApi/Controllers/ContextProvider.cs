using WebStoreApi.Data;

namespace WebStoreApi.Controllers
{
    public static class ContextProvider
    {
        public static ProductsContext db = new ProductsContextFactory().CreateDbContext(Array.Empty<string>());
    }
}
