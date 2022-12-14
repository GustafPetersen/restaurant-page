//                  PART ONE
// function to return short bio and description


//                  PART TWO


const createText = () => {
    const createContainer = document.createElement('div');
    const createText = document.createElement('p');
    createContainer.appendChild(createText);
    createText.innerText = "Some inner text about the restaurant that makes you want to got there";
    return createContainer;
}

//                  PART THREEE

const exportHomePage = () => {
    const mainContent = document.querySelector("#content");
    mainContent.appendChild(createText());
    return mainContent;
}
 export default exportHomePage;
