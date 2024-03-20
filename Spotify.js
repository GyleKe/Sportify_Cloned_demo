const load = setTimeout(()=>{
        document.getElementById("loading-page").style.display="none";
        document.getElementById("HomePage").style.display="flex";
        document.getElementById("bottom_nav").style.display="grid";
},3000
);
const database = [
{"artist":"Eminem","music":['All_that_I_feel.mp3','Without_Me.mp3','Not_Afraid.mp3','Venom.mp3','Rap_god.mp3','Lose_Yourself.mp3','Beautiful_Pain.mp3'],"listeners":'400M',"duration":[256,298,259,296,369,323,288],"cover":['All_that_I_feel.jpg','Without_Me.jpg','Not_Afraid.jpg','Venom.jpg','Rap_god.jpg','Lose_Yourself.jpg','Beautiful_Pain.jpg'],"remark":"The world's most loved rapper simply the G.O.A.T","category":"Rap","index_songs":[0,1,2,3,4,5,6]},
{"artist":"Cecile","music":['Am_Waiting.mp3'],"listeners":'10.5M',"duration":[229],"cover":['Am_Waiting.jpg'],"remark":"Talent?Creativity?You can not ask enough questions,because when it comes to love songs she's one of the best","category":"Reggae","index_songs":[7]},
{"artist":'Fire Boy',"music":['Peru.mp3'],"listeners":'2.5M',"duration":[188],"cover":['Peru.jpg'],"remark":"Took the afrobeats industry by storm we loved it","category":"Afro","index_songs":[8]},
{"artist":'Ed Sheeran',"music":['Peru1.mp3'],"listeners":'2.5M',"duration":[188],"cover":['Peru1.jpg'],"remark":"Took the afrobeats industry by storm we loved it","category":"Afro","index_songs":[9]},
{"artist":'Ayra Starr',"music":['Overloading.mp3'],"listeners":'15M',"duration":[204],"cover":['Overloading.jpg'],"remark":"Crowned as the most humble artist in Africa","category":"Afro","index_songs":[10]},
{"artist":'4 Non Blondes',"music":['Whats_Up.mp3'],"listeners":'10M',"duration":[293],"cover":['Whats_Up.jpg'],"remark":"Beautiful and amazing from our amazing songwriters","category":"Pop","index_songs":[11]},
{"artist":'Mike Posner',"music":['I_took_a_pill_in_Ibiza.mp3'],"listeners":'35M',"duration":[195],"cover":['I_took_a_pill_in_Ibiza.jpg'],"remark":"Tag along as we take a glimpse of this artist's work","category":"Pop","index_songs":[12]},
{"artist":'Beyonce',"music":['Irreplaceable.mp3'],"listeners":'750M',"duration":[230],"cover":['Irreplaceable.jpg'],"remark":"Pop Queen speaking longevity's her second name","category":"RnB","index_songs":[13]},
{"artist":'Nyashinski',"music":['Perfect_Design.mp3'],"listeners":'2.5M',"duration":[214],"cover":['Perfect_Design.jpg'],"remark":"Speaking of this amazing song","category":"RnB","index_songs":[14]},
{"artist":'Johnny Drille',"music":['How_are_you.mp3'],"listeners":'7M',"duration":[186],"cover":['How_are_you.jpg'],"remark":"Yet another hit song from Odogwu","category":"Afro","index_songs":[15]},
{"artist":'Cat Burns',"music":['Live_more_love_more.mp3'],"listeners":'25M',"duration":[158],"cover":['Live_more_love_more.jpg'],"remark":"Do you love? Definitely you'll live more if you love more","category":"Pop","index_songs":[16]},
{"artist":'Jordin Sparks',"music":['No_Air.mp3'],"listeners":'100M',"duration":[278],"cover":['No_Air.jpg'],"remark":"Voice royalty King Chris and Queen Jordin Sparks","category":"RnB","index_songs":[17]},
{"artist":'Chris Brown',"music":['No_Air1.mp3'],"listeners":'100M',"duration":[278],"cover":['No_Air1.jpg'],"remark":"Voice royalty King Chris and Queen Jordin Sparks","category":"RnB","index_songs":[18]}
];

//creating eps content
var eps_content,eps_content_div,eps_content_p;
var ur_l;
for(let i=0;i<6;i++){
	//creating holder container
	eps_content0 = document.createElement("div");
	eps_content0.setAttribute("id",`eps_content${i}`);
	eps_content0.setAttribute("class",`eps_content`);
	document.getElementById("s_eps_content").appendChild(eps_content0);
	//creating image container
	eps_content_div0=document.createElement("div");
	eps_content_div0.setAttribute("id",`eps_content_div${i}`);
	eps_content_div0.setAttribute("class",`eps_content_div`);
	document.getElementById(`eps_content${i}`).appendChild(eps_content_div0);
	//creating text container
	eps_content_p0=document.createElement("div");
	eps_content_p0.setAttribute("id",`eps_content_p${i}`);
	eps_content_p0.setAttribute("class",`eps_content_p`);
	document.getElementById(`eps_content${i}`).appendChild(eps_content_p0);
	//images urls
	ur_l="url("+"Images/Cover/"+database[i]["cover"][0]+")";
	//Giving every Images their urls
	eps_content_div0.style.backgroundImage=ur_l;
	//Following each image with text
	eps_content_p0.innerHTML=database[i]["music"][0].slice(0,database[i]["music"][0].indexOf("_")+1)+" "+database[i]["music"][0].slice(database[i]["music"][0].indexOf("_")+1,database[i]["music"][0].indexOf("."));
}
console.log(document.getElementById("s_eps_holder"));

//creating new_eps_content contents
var new_eps_s0_cont,new_eps_s1_cont,new_eps_s2_cont;
var ur_l1;
var m=4;
for(let i=0;i<4;i++){
	new_eps_s0_cont= document.createElement("div");
	new_eps_s0_cont.setAttribute("id",`new_eps_s0_cont${i}`);
	new_eps_s0_cont.setAttribute("class",`new_eps_s0_cont`);
	document.getElementById("new_eps_content").appendChild(new_eps_s0_cont);
	//dividing each new_eps_s1_cont to two
	for(let j=0;j<2;j++){
	    new_eps_s1_cont= document.createElement("div");
	    new_eps_s1_cont.setAttribute("id",`new_eps_s1_cont${j}`);
	    new_eps_s1_cont.setAttribute("class",`new_eps_s1_cont`);
	    document.getElementById(`new_eps_s0_cont${i}`).appendChild(new_eps_s1_cont);
	    //creating urls
	    ur_l1="url("+"Images/Cover/"+database[m]["cover"][0]+")";
	    new_eps_s1_cont.innerHTML="<div id=new_eps_s2_cont0 style=background-image:"+`${ur_l1}`+";></div><div id=new_eps_s2_cont1>"+"<div id='new_eps_p_holder'>"+"<p id='new_eps_p1'>"+database[m]["music"]+" with "+database[m]["artist"]+"</p>"+"<p id='new_eps_p2'>"+database[m]["remark"]+"</p>"+"</div>"+"<div id='new_eps_div1'><div id='new_eps_plus_holder'><i class='fa fa-plus'></i></div><div id='new_eps_play_holder'><i class='fa fa-play'></i></div></div>"+"</div>";
	    m++;
	}
}

//openSearch
function open_Search(){
	document.getElementById("HomePage").style.display="none";
    document.getElementById("SearchPage").style.display="flex";
    document.getElementById("LibraryPage").style.display="none";
    document.getElementById("LocalMusicPage").style.display="none";
}
//music category
const categories = ["Rap","Afro","Reggae","Pop","RnB"];
const categories_color = [ "#4f374f","#FF6100","#016450","#158a08","#b95d06"];
const category_songs = ["Without_Me.jpg","Overloading.jpg","Am_Waiting.jpg","Irreplaceable.jpg","No_Air.jpg"]
var music_categories;
for(let i=0;i<categories.length;i++){
	music_categories=document.createElement("div");
	music_categories.setAttribute("class","music_categories");
	music_categories.setAttribute("id",`search_music${i}`);
	document.getElementById("search_category_content").appendChild(music_categories);
	document.getElementById(`search_music${i}`).style.backgroundColor=categories_color[i];
	var search_Image_url = "url("+'"'+"Images/Cover/"+category_songs[i]+'"'+")";
	music_categories.innerHTML="<div class='search_category_name1'>"+categories[i]+"</div>"+"<div class='search_category_cover1' style='background-image:"+search_Image_url+";'></div>";
}

//opening library Page
function open_Library(){
	document.getElementById("SearchPage").style.display="none";
	document.getElementById("HomePage").style.display="none";
	document.getElementById("LibraryPage").style.display="flex";
	document.getElementById("LocalMusicPage").style.display="none";
	document.getElementById("miniplayer").style.display="none";
}
//opening local music
function open_Local(){
	document.getElementById("SearchPage").style.display="none";
	document.getElementById("HomePage").style.display="none";
	document.getElementById("LibraryPage").style.display="none";
	document.getElementById("LocalMusicPage").style.display="flex";
	//document.getElementById("miniplayer").style.display="flex";
}
//Adding songs to Local Files
var title_individual_song;
for(let i=0;i<database.length;i++){
	var b,img_url,song_name;
	for(let x=0;x<database[i]["music"].length;x++){
		title_individual_song=document.createElement("div");
	    title_individual_song.setAttribute("id","title_individual_song");
	    document.getElementById("title_song_holder").appendChild(title_individual_song);
	    b=database[i]["music"][x];
	    img_url = "url("+'"'+"Images/Cover/"+b.slice(0,b.indexOf("."))+".jpg"+'"'+")";
	    song_name= database[i]["music"][x];
	    title_individual_song.innerHTML="<div onclick='play_Song(event)' id='title_image' class='title_image_c' data-urli2-type='"+`${img_url}`+"' style='background-image:"+`${img_url}`+";'></div>"+"<div id='title_song_name' onclick='play_Song(event)' data-urli-type='"+`${img_url}`+"'><p data-urli-type='"+`${img_url}`+"' class='song' id="+`song_p${i}${x}`+">"+song_name+"</p><div id='title_download'><i class='fas fa-arrow-down'></i></div></div><i class='fa fa-ellipsis-v'></i>";
	};
}
//starting mini player
var audio_tag = document.getElementById("song_to_play");
var [increase,len,dur,incL,song_duration,arr_songs,arr_songz,arr_songz_2,arr_songz_2_duration,arr_songz_2_pics,my_url,iterate,dragged_to,len_1] = ["","","","","",[],"",[],[],[],"",0,0,0];
/*var arr_songs=[];
var arr_songz;
var arr_songz_2=[];
var arr_songz_2_duration=[];
var arr_songz_2_pics=[];
var my_url;
var iterate=0;*/
//next_song
function next_song(){
    if(iterate===0){
        iterate=0;
    }
    if(iterate===arr_songz.length){
        iterate=0;
    }
    iterate+=1;
    for(let i=0;i<database.length;i++){
       for(let m of database[i]["music"]){
        arr_songz_2.push("Music/"+m);
        arr_songz_2_pics.push("url('Images/Cover/"+m.slice(0,m.indexOf("."))+".jpg')");
       }
       for(let m of database[i]["duration"]){
           arr_songz_2_duration.push(m);
           arr_songs.push(m);
       }
    }
    my_url=arr_songz_2[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    audio_tag.src=arr_songz_2[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    song_duration=arr_songz_2_duration[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    pic_url=arr_songz_2_pics[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    document.getElementById("maxi_image").style.backgroundImage=pic_url;
    document.getElementById("mini_image").style.backgroundImage= pic_url;
    document.getElementById("maxi_marquee").innerHTML=my_url.replace("Music/","");
    document.getElementById("song_marquee").innerHTML=my_url.replace("Music/","");
    arr_songz_2_pics=[];
}
//Previous song
function prev_song(){
    if(iterate===0){
        iterate=0;
    }
    if(iterate===1){
        iterate=arr_songz.length+1;
    }
    iterate-=1;
    for(let i=0;i<database.length;i++){
       for(let m of database[i]["music"]){
        arr_songz_2.push("Music/"+m);
        arr_songz_2_pics.push("url('Images/Cover/"+m.slice(0,m.indexOf("."))+".jpg')");
       }
       for(let m of database[i]["duration"]){
           arr_songz_2_duration.push(m);
           arr_songs.push(m);
       }
    }
    my_url=arr_songz_2[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    audio_tag.src=arr_songz_2[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    song_duration=arr_songz_2_duration[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    pic_url=arr_songz_2_pics[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate];
    document.getElementById("maxi_image").style.backgroundImage=pic_url;
    document.getElementById("mini_image").style.backgroundImage= pic_url;
    document.getElementById("maxi_marquee").innerHTML=my_url.replace("Music/","");
    document.getElementById("song_marquee").innerHTML=my_url.replace("Music/","");
    arr_songz_2_pics=[];
}
function play_Song(event){
    //miniplayer visibility
    document.getElementById("miniplayer").style.display= "flex";
	if(event.target.className==="title_image_c"){
	   /*let my_url=window.getComputedStyle(document.getElementById(event.target.id)).getPropertyValue("background-image");*/
	   my_url=event.target.getAttribute("data-urli2-type");
	   console.log(my_url);
	}
	else if(event.target.className==="song"){
		my_url=event.target.getAttribute("data-urli-type");//dataset.urli;
		console.log(my_url);
	}
	else{
	    if(event.target.id==="maxi_r_next"||event.target.id==="maxi_next"){
	        next_song();
	    }
	    else if(event.target.id==="maxi_l_prev"||event.target.id==="maxi_prev"){
	        prev_song();
	    }
	}
	//Problem here
	var songs=document.getElementsByClassName("song");
	arr_songz=[...songs];
	for(let i=0;i<arr_songz.length;i++){
		arr_songz[i].style.color="white";
	}
	//arr_songz.forEach(v=>{v.style.color="white";});
	if(arr_songz_2.length>0){
	    arr_songz[arr_songz_2.indexOf(window.getComputedStyle(audio_tag).getPropertyValue("src"))+iterate].style.color="#08FF00";
	}
	document.getElementById("mini_image").style.backgroundImage= my_url;
	//value=0
	document.getElementById("maxi_inn_loader").value="0";
	for(let i=0;i<database.length;i++){
		for(let x=0;x<database[i]["cover"].length;x++){
			if(my_url==='url("Images/Cover/'+database[i]["cover"][x]+'")'){
				//problem here
				arr_songz.forEach(v=>{v.style.color="white";});
				iterate=database[i]["index_songs"][x]+1;
			arr_songz[database[i]["index_songs"][x]].style.color="#08FF00";
				document.getElementById("song_marquee").innerHTML=database[i]["music"][x];
	            //changing maxi_image
	            document.getElementById("maxi_image").style.backgroundImage=my_url;
	            //changing maxi_marquee
	            document.getElementById("maxi_marquee").innerHTML=database[i]["music"][x];
				audio_tag.src="Music/"+database[i]["music"][x];
				clearInterval(increase);
				song_duration=database[i]["duration"][x];
			    arr_songs.push(song_duration);
			}
			else{
			    clearInterval(increase);
			}
				audio_tag.play();
	            setTimeout(()=>{document.querySelector("#maxi_inn_loader").max = Math.round(audio_tag.duration);},300);	
				len=0;
	            dur = 0;
				incL = () =>{len+=100/song_duration;dur+=1;}
	            increase = setInterval(incR,1000);
	            setInterval(()=>{document.querySelector("#maxi_inn_loader").value = Math.round(audio_tag.currentTime);},500);
	            document.getElementById("pause_ic").style.display="flex";
                document.getElementById("play_ic").style.display="none";
                document.getElementById("maxi_pl").style.display="none";
                document.getElementById("maxi_pa").style.display="flex";
		}
	};
};

function incR(){
		incL();
		if(dur===arr_songs[arr_songs.length-1]){
			clearInterval(increase);
			len=0;
			dur=0;
			document.getElementById("play_ic").style.display="flex";
            document.getElementById("pause_ic").style.display="none";
		}
		//maxi loader
		//document.getElementById("maxi_inn_loader").value=len.toString();
		//mini loader
		document.getElementById("mini_loader1").style.width =len.toString()+"%";
		/*document.getElementById("p").innerHTML=dur.toString();*/
};
//pause music
function pauseM() {
	audio_tag.pause();
	incL=()=>{len=len;dur=dur;}
}
//play music
function playM() {
	audio_tag.play();
	incL = () =>{len+=100/song_duration;dur+=1;}
}

//liking a song
function like(){
    document.getElementById("unlike").style.display="flex";
    document.getElementById("like").style.display="none";
    document.getElementById("maxi_r_heart").style.display="none";
    document.getElementById("maxi_s_heart").style.display="flex";
}
//pausing a song
function unlike(){
    document.getElementById("like").style.display="flex";
    document.getElementById("unlike").style.display="none";
    document.getElementById("maxi_r_heart").style.display="flex";
    document.getElementById("maxi_s_heart").style.display="none";
}

//playing a song
function pause(){
    document.getElementById("maxi_pa_pl").addEventListener("click",play);
    document.getElementById("maxi_pa_pl").removeEventListener("click",pause);
    document.getElementById("play_ic").style.display="flex";
    document.getElementById("pause_ic").style.display="none";
    document.getElementById("maxi_pl").style.display="flex";
    document.getElementById("maxi_pa").style.display="none";
    pauseM();
}

//pausing a song

function play(){
    document.getElementById("maxi_pa_pl").removeEventListener("click",play);
    document.getElementById("maxi_pa_pl").addEventListener("click",pause);
    document.getElementById("pause_ic").style.display="flex";
    document.getElementById("play_ic").style.display="none";
    document.getElementById("maxi_pa").style.display="flex";
    document.getElementById("maxi_pl").style.display="none";
    playM();
    if(len===0){
        increase =setInterval(incR,1000);
    }
}

//Grow max player
var height;
function growMaxi(){
    height="100vh";
    document.getElementById("maxiplayer").style.height=height;
}

//Checking visibility of mini_player
var end_spaces,end_spaces1;
for(let i=0;i<3;i++){
    end_spaces=document.createElement("br");
    end_spaces1=document.createElement("br");
    document.getElementById("HomePage").appendChild(end_spaces);
    document.getElementById("LocalMusicPage").appendChild(end_spaces1);
};

//liking in maxi player
function maxi_like(){
    like();
};
//unliking in maxi player
function maxi_unlike(){
    unlike();
};

//hiding maxi player
function hide_maxi(){
    height="0vh";
    document.getElementById("maxiplayer").style.height=height;
};

// Add an event listener to the music loader input element
document.querySelector("#maxi_inn_loader").addEventListener("change", (event) => {
    audio_tag.currentTime=Math.round(document.querySelector("#maxi_inn_loader").value);
    console.log(event)
});
