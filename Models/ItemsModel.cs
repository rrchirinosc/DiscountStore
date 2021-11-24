using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountStore
{
    public class ItemsModel
    {

        public List<ItemDTO> Items;

        public static async Task<ItemsModel> Load(SqlConnection connection)
        {
            ItemsModel model = new ItemsModel();
            ItemsRepository repo = new ItemsRepository(connection);
            model.Items = repo.Items.ToList();

            return model;
        }
    }
}
