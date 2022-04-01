module.exports = {  
  env:{
     MONGO_URL:'mongodb+srv://mich:mich@urdan.ytiof.mongodb.net/urdan',
     // MONGO_URL:'mongodb+srv://mich:mich@urdan.ytiof.mongodb.net/urdan?retryWrites=true&w=majority',
    CLOUDINARY_CLOUD_NAME: 'myshops',
    CLOUDINARY_API_KEY: '656495259662733',
    CLOUDINARY_API_SECRET: '5xB4eQNn_Ggmgr-IdC5QDJpiATo',
    JWT_SECRET:'secret',
    NEXTAUTH_URL:'http://localhost:3000',
    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "6fb92e074f248a",
    SMTP_PASSWORD: "f34661aca1bb1f",
    SMTP_FROM_EMAIL: "URDAN",
    SMTP_FROM_NAME: "noreply@urdan.com.au",
  },
  images: {
    domains: ['res.cloudinary.com'],
},
}
