using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Api.Models
{
    public class Like
    {
        // user who has liked other users
        public int LikerId { get; set; }

        // user who has been liked by other users
        public int LikeeId { get; set; }

        public User Liker { get; set; }

        public User Likee { get; set; }
    }
}
