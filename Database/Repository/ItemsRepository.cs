using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountStore
{
    public class ItemsRepository
    {
        private SqlConnection _connection;

        public ItemsRepository(SqlConnection connection)
        {
            _connection = connection;
        }

        /* Fetch all available members */
        public IEnumerable<ItemDTO> Items
        {
            get
            {
                string sql = "SELECT *" +
                             " FROM [Items] ORDER BY [Id]";
                List<ItemDTO> items = new List<ItemDTO>();
                items = _connection.Query<ItemDTO>(sql).ToList();
                return items;
            }
        }
    }
}
