using Vega.Models;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Vega.Data
{
    public static class DbInitializer
    {
        public static void Initialize(VegaContext context)
        {
            context.Database.EnsureCreated();

            // Look for any models.
            if (context.Makes.Any())
            {
                return;   // DB has been seeded
            }

            var makes = new Make[]
            {
                new Make{ ID=1, Name="Volks" },
                new Make{ ID=2, Name="Ford"},
                new Make{ ID=3, Name="Subaru"}
            };

            foreach (Make m in makes)
            {
                context.Makes.Add(m);
            }
            context.SaveChanges();

           if (context.Models.Any())
            {
                return;
            }

            var models = new Model[]
            {
               new Model{MakeID=1, Name="Schiroco"},
               new Model{MakeID=1, Name="Bug"},
               new Model{MakeID=2, Name="Mustang" },
               new Model{MakeID=2, Name="Fairlane" },
               new Model{MakeID=2, Name="Pinto"},
               new Model{MakeID=3, Name="Imprezo"},
               new Model{MakeID=3, Name="Forester"},
               new Model{MakeID=3, Name="Outback"}
               };

            foreach (Model m in models)
            {
                context.Models.Add(m);
            }

            context.SaveChanges();

            if (context.Features.Any())
            {
                return;
            }

            var features = new Feature[]
            {
                new Feature{Name="Air Conditioning"},
                new Feature{Name="Heated Seats"},
                new Feature{ Name="Fog Lights"},
                new Feature {Name="Jet Pack"},
                new Feature{Name="Rocket Launcher"}
            };

            foreach (Feature f in features)
            {
                context.Features.Add(f);
            }

            context.SaveChanges();
        }
    }
}
