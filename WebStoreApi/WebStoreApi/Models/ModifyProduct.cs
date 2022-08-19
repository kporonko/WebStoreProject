namespace WebStoreApi.Models
{
    public class ModifyProduct
    {
        public int ProductId { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Category { get; set; } = null!;
        public double Price { get; set; }
        public string Image { get; set; } = null!;
    }
}
