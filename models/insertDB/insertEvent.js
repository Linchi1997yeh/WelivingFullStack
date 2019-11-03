var req = require('./backendAPI.js');
var db = new req("shareAPP");

const all = ["半伴西門","半伴敦南","半伴北車","半伴市府","半伴後山埤","半伴東門","半伴民生"];

var obj1 = {
    type: 'event',
    place: '台北市大安區敦化南路一段',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWt0mgTD8sdhR5EsPqkhyklqGH83MtNXOuqqazm52-hRrWed_k3w&s',
    houseToShow: ['半伴西門','半伴敦南','半伴北車'],
    title:'Thanks Giving',
    date: '18-11-2019',
    description: 'Dinner Party',
    host: 'host1@gmail.com',
    phoneNumber: 091234567
}
var obj2 = {
    type: 'event',
    place: '台北市大同區太原路79巷',
    photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-quotes-1565117893.jpg?crop=0.671xw:1.00xh;0.204xw,0&resize=640:*',
    houseToShow: ['半伴西門','半伴敦南','半伴北車'],
    title:'Christmas Party',
    date: '23-25-2019',
    description: 'Secret Santa',
    host: 'host2@gmail.com',
    phoneNumber: 091102967
}
var obj3 = {
    type: 'event',
    place: '台北市大安區敦化南路一段',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOv4ABkr5I4FKxRCpsX2ZkNCor36Ct_5mAYJtm6GIsbsADIgvHQ&s',
    houseToShow: all,
    title:'New Year',
    date: '30-12-2019',
    description: 'New Year Celebration',
    host: 'host3@gmail.com',
    phoneNumber: 095837567
}
var obj4 = {
    type: 'event',
    place: '台北市松山區民生東路四段97巷',
    photo: 'https://chowpublicmarket.com/wp-content/uploads/2018/06/AdobeStock_83661912-1080x675.jpeg',
    houseToShow: all,
    title:'Cooking Night',
    date: '18-11-2019',
    description: 'Learn to Cook with professionals',
    host: 'host4@gmail.com',
    phoneNumber: 0912049267
}
var obj5 = {
    type: 'notification',
    place: '台北市大安區敦化南路一段',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-JDYpzk3kuMw4C-xQuOmv1yZ_2AVipqJovikqxAgG6bre9Fv&s',
    houseToShow: ['半伴敦南'],
    title:'恭喜',
    date: '18-11-2019',
    description: '有緣世界第一',
    host: 'host5@gmail.com',
    phoneNumber: 091947567
}
var obj6 = {
    type: 'notification',
    place: '台北市大同區太原路79巷',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfN6JKHbB_5wnKPePcqp8W3v0ZvESGRVLf7eVfDeNAmgaCLQhrPw&s',
    houseToShow: ['半伴北車'],
    title:'租金未繳',
    date: '18-11-2019',
    description: '胡炳軍',
    host: 'host6@gmail.com',
    phoneNumber: 0918654567
}
var obj7 = {
    type: 'notification',
    place: '台北市萬華區康定路25巷41弄',
    photo: 'https://previews.123rf.com/images/andreypopov/andreypopov1510/andreypopov151000071/45703699-happy-male-janitor-with-cleaning-equipments-mopping-floor.jpg',
    houseToShow: ['半伴西門'],
    title:'清洗廁所',
    date: '18-11-2019',
    description: '負責人：Alfred Lo',
    host: 'host7@gmail.com',
    phoneNumber: 091232667
}



db.return_dbname();
db.showURL();
db.insert_many("one", obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19);
//db.delete_one("GGGGGG", obj);
//db.update_one("GGGGGG",{name:"Dio"},{stend:"ZA warudo"});
//db.update_many("GGGGGG", { name: "Dio" }, { stend: "Za warudo" });
//db.find_data("GGGGGG", obj2);
//db.find("GGGGGG");
//db.sort("GGGGGG",1);
//db.find_limit("GGGGGG", 2);
//db.find_skip_limit("GGGGGG",2,3);
//db.delete_many("GGGGGG", obj);
// var obj ={
//     house_name:'BCool',
//     theme:'Share Your Idea',
//     about:'An original, non-technical writing or composition',
//     host_name:[{name:'Micheal heap',profile_pic:'http://3.227.148.97:3000/api/get_personal_photo?id=1',position:'Chief'}],
//     photos:[
//         "http://3.227.148.97:3000/api/get_house_photo?id=bcool_1",
//         "http://3.227.148.97:3000/api/get_house_photo?id=bcool_2",
//         "http://3.227.148.97:3000/api/get_house_photo?id=bcool_3",
//         "http://3.227.148.97:3000/api/get_house_photo?id=bcool_4",
//         "http://3.227.148.97:3000/api/get_house_photo?id=bcool_5"
//     ],
//     sleepingArrangement:[],
//     events:[],
//     location:'No. 100號, Lane 100, Sichuan Road, Xitun District, Taichung City, 100',
//     apartmentInfo:['living room','kitchen','garbage disposal'],
//     price:12000,
//     reviews:4,
//     similar:[]
// }