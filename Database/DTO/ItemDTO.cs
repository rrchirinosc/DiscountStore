using Dapper.Contrib.Extensions;

namespace DiscountStore
{
    public class ItemDTO
    {
        public int Id { get; set; }

        public string SKU { get; set; }

        public double Price { get; set; }

        public double DiscountPrice { get; set; }

        public double DiscountCount { get; set; }

        public string Description { get; set; }

        [Computed] // Have dapper ignore mapping this, used for Cart
        public int Count { get; set; } = 0;
    }
}
