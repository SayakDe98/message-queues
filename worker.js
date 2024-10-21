const { Worker } = require('bullmq');

const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5 * 1000))
const worker = new Worker('email-queue', async (job) => {
    console.log(`Message recieved id: ${job.id}`);
    console.log('Processing message');
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log("Email sent successfully.");
}, {
    connection: { // Provide the Redis connection details
        host: '127.0.0.1', // Redis host (default for localhost)
        port: 6379         // Redis port (default port is 6379)
    }
});