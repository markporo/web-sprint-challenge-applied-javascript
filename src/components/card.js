import axios from "axios";

const Card = (article) => {
  //task 55555// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // pull out properties
  //const { headline, authorPhoto, authorName } = article;

  console.log(article.headline, "headline");

  // create elements
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  const spanAuthor = document.createElement("span");

  // add classes
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");
  img.classList.add("authorPhoto");

  // append/ heirarchy
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(spanAuthor);
  imgDiv.appendChild(img);

  //inner content
  headlineDiv.textContent = article.headline;
  spanAuthor.textContent = article.authorName;
  img.setAttribute('src', article.authorPhoto);


  // add event listener
  cardDiv.addEventListener("click", function () {
    console.log(article.headline);
  }
  );

  // return cardDiv
  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardsContainer = document.querySelector(selector);

  axios.get("http://localhost:5000/api/articles")
    .then(res => {
      console.log(res.data);

      const javascript = res.data.articles.javascript;
      const bootstrap = res.data.articles.bootstrap;
      const technology = res.data.articles.technology;
      const node = res.data.articles.node;
      const jquery = res.data.articles.jquery;

      javascript.forEach(art => {
        cardsContainer.appendChild(Card(art));
      });
      bootstrap.forEach(art => {
        cardsContainer.appendChild(Card(art));
      });
      technology.forEach(art => {
        cardsContainer.appendChild(Card(art));
      });
      node.forEach(art => {
        cardsContainer.appendChild(Card(art));
      });
      jquery.forEach(art => {
        cardsContainer.appendChild(Card(art));
      });

    })
    .catch(err => {
      console.log(err);
    })
}

export { Card, cardAppender }
