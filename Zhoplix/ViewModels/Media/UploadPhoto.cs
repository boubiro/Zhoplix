﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zhoplix.Models
{
    public class UploadPhoto
    {
        public string PhotoId { get; set; }
        public string PhotoLocation { get; set; }
        public byte[] Photo { get; set; }
    }
}
