
fetch('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR03bAdsZk-acmt8LhNZgPziKn3G9vpQBbMm794MTtDVIlF4gBC0sePzEEo', {
  method: 'GET', // or 'PUT'
})
.then(response => response.json())
.then(data => {
    const songs = data.songs
    const top100vn = songs.top100_VN[0].songs
    console.log(top100vn)
    showall(top100vn)

    console.log(data)
 
})
.catch((error) => {
  console.error('Error:', error);
});

function showall(data){
      
        var show_all_music = document.querySelector('#show_all_music')


        for (let i = 0; i < data.length; i++) {
          var tagshtml = `
          
          <li hdev-creator="${data[i].creator}" hdev-musi="${data[i].music}" class="list_music_item list-group-item d-flex justify-content-between align-items-center">
            
          ${i+1} - ${data[i].title} - ${data[i].creator}

          <span class="badge rounded-pill">
          <div class="class_img_icon">
            <img src="${data[i].avatar}">
          </div>
          
          </span>
          </li>
          `
          show_all_music.innerHTML += tagshtml
        }
        
    $(document).ready(function(){
      $('.list_music_item').click(function(){
        var data = this.getAttribute("hdev-musi")
        var creator = this.getAttribute("hdev-creator")
        GetPlayMusic(data, creator)
      })
    })

}




function GetPlayMusic(data, creator){
  console.log(data)
  const box_music = document.querySelector('#box-music')
  box_music.innerHTML = '';
  box_music.innerHTML = `<audio controls autoplay>
  <source id="source_music_1" src="${data}" type="audio/ogg">
  <source id="source_music_2" src="${data}" type="audio/mpeg">
Your browser does not support the audio element.
</audio>`

}