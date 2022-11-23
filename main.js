const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Milestone 2 -
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.


// ripercorro tutto l'array per assegnare i vari elementi
let container = document.getElementById("container");
let num = 0;
inner ();
let btn = document.getElementsByClassName("like-button")
for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    element.addEventListener("click",
    function () {
        element.classList.toggle("like-button--liked")


        let likes = posts[index].likes
        let id = index + 1;
        let counter = document.getElementById("like-counter-"+id )
        const idArray = [];

        if (num === 0) {
            num++;
            counter.innerHTML = likes + num;
            idArray.push(id);
            console.log(idArray);
        } else if (num === 1){
            num--;
            counter.innerHTML = likes + num;

        }
      
        

        

    })
    
}


function inner() {
    posts.forEach(element => {

        let count = parseInt(element.likes);
        let post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = "";
        let data = element.created;
        data = parseInt(data.replace('2021-',''));
        if (element.author.image == null) {
            nameSplit = element.author.name.split(" ");
            text = nameSplit[0].charAt(0) + nameSplit[1].charAt(0) ;
        }
        post.innerHTML =`
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src=${element.author.image} alt=${element.author.image == null ? text : element.author.image}>                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${element.author.name}</div>
                            <div class="post-meta__time">${12-data} mesi fa</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${element.content}</div>
                <div class="post__image">
                    <img src=${element.media} alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#!" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${count}</b> persone
                        </div>
                    </div> 
                </div>            
        `
        container.append(post)
    });
}