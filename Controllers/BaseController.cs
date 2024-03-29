﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Options;
using System;
using System.Data.SqlClient;

namespace DiscountStore
{
    public class BaseController : Controller
    {
        protected ApplicationOptions AppOptions { get; set; }

        private SqlConnection _connection;

        public BaseController(
             IOptions<ApplicationOptions> appOptions)
        {
            AppOptions = appOptions.Value;
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            // Return database connection to the connection pool
            if (_connection != null)
            {
                _connection.Dispose();
            }
            base.OnActionExecuted(context);
        }

        protected SqlConnection Connection
        {
            get
            {
                if (_connection == null)
                {
                    SqlConnection connection = new (AppOptions.ConnectionString);
                    try
                    {                        
                        connection.Open();
                    }
                    catch (Exception e)
                    {
                        // let null return go through to be handled ahead
                        Console.Write(e.Message);
                    }
                    _connection = connection;
                }
                return _connection;
            }
        }

    }
}
