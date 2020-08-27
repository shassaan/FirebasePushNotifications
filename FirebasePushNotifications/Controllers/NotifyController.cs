using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirebasePushNotifications.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotifyController : ControllerBase
    {
        private readonly FireBaseService fireBaseService;
        public NotifyController(FireBaseService fireBaseService)
        {
            this.fireBaseService = fireBaseService;
        }

        [HttpPost]
        public async Task<String> Post([FromBody]string token)
        {
            try
            {
                var result= await fireBaseService.SendNotification(token);
                return result;
            }
            catch (Exception ex)
            {

                return ex.Message;
            }
        }
    }
}
