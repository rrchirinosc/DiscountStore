using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountStore
{
    /* In charge of fetching the store items from the DB */
    public class ItemsModel
    {
        public List<ItemDTO> Items;

        public static async Task<ItemsModel> Load(SqlConnection connection)
        {
            ItemsModel model = new ItemsModel();

            // NOTE:
            // For the sake of this sample I load the store items data
            // from a json file iff no access to the database
            try
            {
                ItemsRepository repo = new ItemsRepository(connection);
                model.Items = repo.Items.ToList();
            }
            catch (Exception e)
            {
                string json = File.ReadAllText("./Models/Data/StoreItems.json");
                model.Items = JsonConvert.DeserializeObject<List<ItemDTO>>(json);
            }


            return model;
        }
    }
}
