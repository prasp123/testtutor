let express = require("express");
let webPush = require('web-push');
let bodyParser = require('body-parser');
let app = express();
let subscriptions = [{ "endpoint": "https://fcm.googleapis.com/fcm/send/fodROwCoAx4:APA91bG4im1jVE-Juhr9ySHw6-OT4E6uHW4jkdDaIzKSqU4dA2LKNXfApF2GvHMeVZz83bdMNVhoWdI6wY1YXhFi2OW-GC1huxVXYyH5dqLwiiK-ITVd-L_gGWCYZTIcWXpNle_JNhq9", "expirationTime": null, "keys": { "p256dh": "BBso_FzEWJkMgmQ1MC720j8o3VDjqmddNkNXAqaGqsxRP2QkYIVDVFsLtCYGHy57aTMwquHvK208Uxeb7hQDbQY", "auth": "fhReWtBUb2kEeG6BxL5zWg" } }];
let timeLeft = 3;
let timer;

app.use(bodyParser.json());
app.use(express.json({ limit: '1mb' }));
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    next();
});
let vapidkeys = {
    publicKey: 'BEGBElrne0vddRaZhCEuADM_Zpesay5bBVDxBdVDs4M1ZPjnFAnmJ7xBYElLVmceV4ITGWQOn-_eekO3lpAmcX0',
    privateKey: 'BfiG-CwxhVm4R7TvAPEv7ZSc_pt-KPxweXQ3d5RwAdA'
  }
  
  webPush.setVapidDetails("mailto:test@vtu.ac.in",
    vapidkeys.publicKey,
    vapidkeys.privateKey);
  

app.get('/feed', (req, res) => {
    timeLeft = 3;
    console.log("inside the feed in server");
    let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c5KJsSTqXmY:APA91bGnMbOFPpcv7gs2rSFwDT9bTvjT9KVpmnuam8faaRwc-4O3x-DdAJy49GTK0NtmPR-0TCM63q4sfkESeTpdPnVWAnlW55O678a4T0W4TM4I4capPPcebxPBhyLVbsNjFG0FARUf","expirationTime":null,"keys":{"p256dh":"BPQJE-ma0OesDMbQRi2buNJo4gV5cPbPQz6jMHY4Q5D2GDw_hIvximfEJ1cjLXYw-nMwEwaVc570qJ7MymcXpJw","auth":"4zb3pv6puxhOSsnmzg7Inw"}};
    webPush.sendNotification(sub, 'feed peggy');
    res.sendStatus(200);
});

app.listen(3000, function () {
    console.log('Listening on port 8080');
});
