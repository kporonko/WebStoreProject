using WebStoreApi.ModelsEF;

namespace WebStoreApi.Models
{
    public class ProductAdd
    {
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Category { get; set; } = null!;
        public double Price { get; set; }
        public string Image { get; set; } = null!;
        public double Rate { get; set; }
        public int Count { get; set; }
    }
}
