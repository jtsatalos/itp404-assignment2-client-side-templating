const membersTemplate = Handlebars.compile(
    document.getElementById('members-template').innerHTML
);

Handlebars.registerHelper('stringify-num',function(num) {
    return num.toLocaleString()
});

Handlebars.registerHelper('link', function(text, url) {
    url = Handlebars.escapeExpression(url);
    text = Handlebars.escapeExpression(text);
  
    return new Handlebars.SafeString(
      "<a href='" + url + "'target='_blank'>" + text + "</a>"
    );
  });
  


function formSubmit() {
    $('#results').html('<div class="loader">Loading...</div>');
    let bob = document.getElementById("sbstr").value;
    console.log(bob)
    let theUrl = 'https://www.reddit.com/r/' +bob+ '.json'
    let promise = $.ajax({
        type: 'GET',
        url: theUrl
    });

        promise.then(function(members) {
            let html = membersTemplate({
                members: members.data.children
            }); 

            console.log('human shit')
            // console.log(members.data.children)
            // console.log(members)
        // let html = '';
        // members.data.children.forEach(function(member) {
        //     console.log(member.data.title)
        //     html +=
        //     `
        //     <br>Title: <a href="${member.data.url}"target="_blank">${member.data.title}</a></br>
        //     <br>Score: ${member.data.score}</br>
        //     <br>Author: ${member.data.author}</br>
        //     <br></br>
        //     `
           
        // });
        $('#results').html(html);
    });

    
}
// $('#cracken').on('submit',function() {
//     console.log("fuck")
//     // <div class="loader"id="loader">Loading...</div>
//     $('#loader').html();
//     let promise = $.ajax({
//         type: 'GET',
//         url:'https://api.github.com/orgs/emberjs/members'
//     });



//     promise.then(function(members) {
//         let html = '';
//         members.forEach(function(member) {
//             html += `
//                 <img 
//                     src="${member.avatar_url}" 
//                     alt="image of ${member.login}"
//                     width="150">
//             `;
//         });
//         $('#results').html(html);
//     });
// });