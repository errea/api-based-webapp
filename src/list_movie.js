const container = document.getElementById('movieList');
const baseApi = 'https://api.tvmaze.com/search/shows?q=action';

const appData = [{
    title: "title1",
    description: "desc1",
    output: "out1"
  }, {
    title: "title2",
    description: "desc2",
    output: "out2"
  }, {
    title: "title3",
    description: "desc3",
    output: "out3"
  }];
  

appData.forEach((result, idx) => {
    // Create list
    const card = document.createElement('div');
    card.classList = 'card-body';
  
    const content = `
    <div class="card">
        <div class="card-body">
            <h5>${result.title}</h5>
            <button data-id ${result.output}>Comments</button>
            <button>${result.output}</button>
        </div>
  </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
})


export const displayList = async (e) => {
    e.preventDefault();
    // const input = document.querySelectorAll('input');
    const response = await fetch(
      `${baseApi}`,
      {
        method: 'GET',
        body: JSON.stringify({
       
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };
  

  