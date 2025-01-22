const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    secure : true,
    host: 'smtp.gmail.com',
    port:465,
    auth:{
        user:'gautham.ram.s70@kalvium.community',
        pass:'qqsh hrnk tahk sjre',
    }
})

function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    })
    console.log("mail sent");

}

sendMail("gautham.ram.s70@kalvium.community","This is my subject","This is my mail working");
module.exports = transporter;