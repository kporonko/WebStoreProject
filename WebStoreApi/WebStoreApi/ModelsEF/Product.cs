namespace WebStoreApi.ModelsEF
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Category { get; set; } = null!;
        public virtual Rating? Rating { get; set; }
        public string Image { get; set; } = null!;
    }
}
