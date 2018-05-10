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
    }
}