using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Vega.Models;

namespace Vega.Data
{
    
    public class VegaContext : DbContext
    {
        public VegaContext(DbContextOptions<VegaContext> options) : base(options)
        {
        }

        public DbSet<Model> Models { get; set; }
        public DbSet<Make> Makes { get; set; }
        public DbSet<Feature> Features { get; set; }

    }
  
}
