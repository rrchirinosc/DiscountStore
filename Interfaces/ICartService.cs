using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountStore
{
    interface ICartService
    {
        void Add(ItemDTO item);
        void Remove(ItemDTO item);
        double GetTotal();
    }
}
