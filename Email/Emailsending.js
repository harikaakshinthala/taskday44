import nodemailer from 'nodemailer'


const mail = (url,Useremail,content,subject) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port:"465",
        auth: {
            user:"harikaakshinthala97@gmail.com",
            pass:"pnejpdmumqmdvfzj"
        },
        tls:{
            rejectUnauthorized:true
        }
    
    })
    
    const messagesubject = subject
    const mailtext = `${content} - ${url}`
    
    const info = {
    from:"harikaakshinthala97@gmail.com",
    to:Useremail,
    subject:messagesubject,
    text:mailtext
    }
    
    transporter.sendMail(info,(err)=>{
    if(err){
        console.log("mail error ",err)
    }else{
        console.log("Email has been sent")
    }
    })
}

export default mail;
