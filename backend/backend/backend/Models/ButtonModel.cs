using System;
using Newtonsoft.Json;

namespace backend.Models
{
    public class ButtonModel
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "value")]
        public string Value { get; set; }

        public static ButtonModel FromGraphDoc(GraphDoc doc)
        {
            var res = new ButtonModel 
            {
                Id = doc.Id
            };

            return res;
        }
    }
}