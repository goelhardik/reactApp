﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class GraphDoc
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "sanskrit")]
        public string Sanskrit { get; set; }

        [JsonProperty(PropertyName = "verseId")]
        public string VerseId { get; set; }
        
        [JsonProperty(PropertyName = "youTubeLink")]
        public string YouTubeLink { get; set; }
    }
}
