using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountStore
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : BaseController
    {
        public IOptions<ApplicationOptions> _appOptions;

        public ItemsController(IOptions<ApplicationOptions> appOptions) : base(appOptions)
        {
            _appOptions = appOptions;
        }

        // GET: api/<ItemsController>
        [HttpGet]
        public async Task<IEnumerable> Get()
        {
            ItemsModel model = await ItemsModel.Load(Connection);
            return model.Items;
        }
    }
}
