using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebStoreApi.ModelsEF;

namespace WebStoreApi.Configurations
{
    public class RatingConfiguration : IEntityTypeConfiguration<Rating>
    {
        public void Configure(EntityTypeBuilder<Rating> builder)
        {
            builder
                .ToTable("Rating")
                .HasKey(x => x.RatingId);
            builder
                .Property(x => x.Rate)
                .HasColumnName("Rate")
                .HasColumnType("int")
                .IsRequired();
            builder
                .Property(x => x.Count)
                .HasColumnName("Count")
                .HasColumnType("int")
                .IsRequired();
        }
    }
}
