﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
    }
}
