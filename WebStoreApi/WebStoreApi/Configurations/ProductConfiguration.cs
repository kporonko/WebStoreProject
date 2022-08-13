using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebStoreApi.ModelsEF;

namespace WebStoreApi.Configurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder
                .ToTable("Product")
                .HasKey(x => x.ProductId);
            builder
                .Property(x => x.ProductId)
                .HasColumnName("ProductId")
                .HasColumnType("int")
                .IsRequired();
            builder
                .Property(x => x.Title)
                .HasColumnName("Title")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsRequired();
            builder
                .Property(x => x.Description)
                .HasColumnName("Description")
                .HasColumnType("varchar")
                .HasMaxLength(1000)
                .IsRequired();
            builder
                .Property(x => x.Category)
                .HasColumnName("Category")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsRequired();
            builder
                .Property(x => x.Image)
                .HasColumnName("Image")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsRequired();
        }
    }
}
