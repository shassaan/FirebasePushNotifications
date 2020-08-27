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

        public async Task<string> SendNotification(string token)
        {
            var defaultApp = FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromFile(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "keys.json")),
            });

            var message = new Message()
            {
                Notification = new Notification
                {
                    Title = "Message Title",
                    Body = "Message Body"
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
