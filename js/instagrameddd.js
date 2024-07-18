let url = "https://instagram-scraper-api2.p.rapidapi.com/v1/likes?code_or_id_or_url=CxYQJO8xuC6"
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '3a030c9211msh6c0d3fa92ea0031p12d91fjsn32f0c365da2b',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
    }
}
let response = fetch(url, options)

response.then((v) => {
    return v.json()
}).then((content) => {
    console.log(content)
    let postCard = document.querySelectorAll('.post')

    ihtml = ""

    for (data in content) {
        console.log(content[data])
        ihtml += `
        <div class="card mb-5">
              <div class="top">
                <div class="userdetail">
                  <div class="profile-image">
                    <img src="" alt="" class="cover" srcset="">
                  </div>
                  <h3>${content[data].items[12].full_name}<br><span>Rahim Yar Khan</span></h3>
                </div>
                <div>
                  <img src="assets/svg/dotbtn.svg" class="dot" alt="">
                </div>
              </div>
              <div class="image-bx">
                <img src="assets/images/IMG_4307.jpg" class="cover" alt="">
              </div>
              <div class="actionsBtns">
                <div class="left">
                  <img class="like-button" src="/assets/svg/heart.svg">
                  <img src="assets/svg/comment.svg" alt="">
                  <img src="assets/svg/share.svg" alt="">
                </div>
                <div class="right">
                  <img src="assets/svg/favouritPost.svg" class="favourit" alt="">
                </div>
              </div>
              <h4 class="likes">3,456 likes</h4>
              <h4 class="message"><b>Muhammad Sikandar</b>Thanks for your love and suports
                <span>#hotel</span><span>#pic</span><span>#clone</span>
              </h4>
              <h4 class="comments font-size-h4">View all 299 comments</h4>
              <div class="addcomments">
                <div class="userImg">
                  <img src="assets/images/321012644_464342419232543_5709440205566717067_n - Copy (2).jpg" alt=""
                    srcset="" class="cover">
                </div>
                <input type="text" class="text" placeholder="Add a comment...">
              </div>
              <h5 class="postTime">4 hours ago</h5>
            </div>`
    }

    postCard.forEach(card => {
        card.innerHTML = ihtml
    });
});
