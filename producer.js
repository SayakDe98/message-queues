const { Queue } = require('bullmq');
const notificationQueue = new Queue('email-queue');

async function init() {
    const res = await notificationQueue.add('email to sayak', { email: 'sayakde22@gmail.com', subject: "Welcome Mess", body: "Hey Sayak, Welcome"}); // add a message/job here
    console.log('Job added to queue', res.id);
}

init();