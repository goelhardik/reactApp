using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Gita
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "sanskrit")]
        public string Sanskrit { get; set; }

        [JsonProperty(PropertyName = "verseId")]
        public string VerseId { get; set; }

        public static Gita FromGraphDoc(GraphDoc doc)
        {
            var res = new Gita 
            {
                Id = doc.Id,
                Sanskrit = doc.Sanskrit,
                VerseId = doc.VerseId
            };

            return res;
        }
    }
}
