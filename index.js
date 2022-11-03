const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on("ready", () => {
  console.log("your bot is ready!")
})


const random_num = () =>{
    return Math.floor(Math.random() *5);
}

client.on("message", msg => {
  let call_me = ['เรียกทำไม', 'สวัสดีจ้า', 'ห้ะ', 'มีอะไร', 'ว่า']
  if (msg.content === "ยูอัน") {
      msg.reply(call_me[random_num()])
  }
})

const random_num_one = () =>{
  return Math.floor(Math.random() *10);
}

client.on("message", msg => {
    let foods = ['ข้าวมันไก่', 'บะหมี่น้ำใส', 'ก๋วยเตี๋ยวต้มยำ', 'ไก่ทอด', 'ซาลาเปา ไอติม', 'ชาบู', 'ข้าวเหนียวหมูปิ้ง', 'ไข่ข้น', 'ข้าวแกงกะหรี่หมูทอด', 'คะน้าหมูกรอบ']
    if (msg.content === "กินอะไรดี") {
        msg.reply(foods[random_num_one()])
    }
})

const random_num_two = () =>{
  return Math.floor(Math.random() *3);
}

client.on("message", msg => {
    let ms = ['ฝันดีจ้า', 'Good night', 'Nite Nite']
    if (msg.content === "ฝันดี") {
        msg.reply(ms[random_num_two()])
    }
})

client.on("message",msg => {
  if (msg.content === "ไปละ") {
      msg.reply("บาย")
  }
})

client.on("message",msg => {
  if (msg.content === "จะสอบแล้วนะ") {
      msg.reply('สู้ๆ น้า')
  }
})


client.login(process.env.TOKEN)