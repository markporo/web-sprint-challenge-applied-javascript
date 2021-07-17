const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // create elements
  const headerDiv = document.createElement("div");
  const spanDate = document.createElement("span");
  const h1Title = document.createElement("h1");
  const spanTemp = document.createElement("span");

  // add classes
  headerDiv.classList.add("header");
  spanDate.classList.add("date");
  h1Title.classList.add("title");
  spanTemp.classList.add("temp");

  // add inner content
  spanDate.textContent = date;
  h1Title.textContent = title;
  spanTemp.textContent = temp;

  // append children/ hierarchy
  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(h1Title);
  headerDiv.appendChild(spanTemp);

  // return header

  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // access parent element
  const parent = document.querySelector(selector);

  // title
  let newsTitle = "The Lambda Herald";

  // Date
  let date = new Date();
  let month;

  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;

    default:
    // code block
  }
  let todaysDate = month + " " + date.getDate() + " , " + date.getFullYear();

  //temp
  const temperature = "83 degrees";

  // append Header
  parent.appendChild(Header(newsTitle, todaysDate, temperature));
}

export { Header, headerAppender }
