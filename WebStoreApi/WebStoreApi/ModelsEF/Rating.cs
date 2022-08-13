namespace WebStoreApi.ModelsEF
{
    public class Rating
    {
        public int RatingId { get; set; }
        public int Rate { get; set; }
        public int Count { get; set; }

        public int ProductId { get; set; }
        public virtual Product? Product { get; set; }
    }
}
