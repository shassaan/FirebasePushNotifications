using System;
using System.Collections.Generic;
using System.Linq;
using FirebaseAdmin;
using FirebaseAdmin.Messaging;
using Google.Apis.Auth.OAuth2;
using System.IO;
using System.Threading.Tasks;

namespace FirebasePushNotifications
{
    public class FireBaseService
    {
        public FireBaseService()
        {
            
        }

        public async Task<string> SendNotification(NotifyDTO notifyDTO)
        {
            var defaultApp = FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromFile(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "keys.json")),
            });

            var message = new Message()
            {
                Notification = new Notification
                {
                    Title = notifyDTO.Title,
                    Body = notifyDTO.Body,
                    ImageUrl = notifyDTO.ImageURL,
                },
                Condition = "!('anytopicyoudontwanttouse' in topics)"
            };
            FirebaseMessaging messaging = FirebaseMessaging.DefaultInstance ?? FirebaseMessaging.DefaultInstance;
            
            var result = await messaging.SendAsync(message);
            FirebaseApp.DefaultInstance.Delete();
            return result;
        }
    }
}
