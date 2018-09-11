var imageTracker1 = "old";
function changeMeOne(){
    var img1= document.getElementById("img1");
  if(imageTracker1 == "old"){
      img1.src = "https://s.yimg.com/ny/api/res/1.2/HmWK9QiISxY_VGscxxuqGg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/06823d7c6e533fa1d99ff3bd18214b38";
      imageTracker1 = "new";
  }else{
      img1.src = "https://i.pinimg.com/originals/8f/d8/c3/8fd8c399f6595c378d32260e1b3b7088.jpg";
      imageTracker1 = "old";
  }
    
}
var imageTracker2 = "old";
function changeMeTwo(){
    var img2 = document.getElementById("img2");
    if(imageTracker2 == "old"){
        img2.src = "https://media.gq.com/photos/5a0dcaad4e857d64403186ed/3:2/w_880/kyrie-irving-gq.jpg";
        imageTracker2 = "new";
    }else{
        img2.src = "https://thesportspost.com/wp-content/uploads/2018/01/kyrie-irving-threatened-to-sit-out-if-cavs-didnt-comply.jpg";
        imageTracker2 = "old";
    }
}
var imageTracker3= "old";
function changeMeThree(){
    var img3 = document.getElementById("img3");
    if(imageTracker3 == "old"){
        img3.src = "https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/105185/0774370001453665532_filepicker.jpg";
        imageTracker3 = "new";
    }else{
        img3.src = "https://i.4pcdn.org/sp/1496894186528.jpg";
        imageTracker3 = "old";
    }
    
}
