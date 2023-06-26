let summaryDiv = document.querySelector('.summary')

fetch('data.json').then((response) => {
  response.json().then((data) => {
    data.summary.map((summary) => {
      summaryDiv.innerHTML += 
      `
      <div class="${summary.category.toLowerCase()}">      
        <img src="${summary.icon}"/>
        <p>${summary.category}</p>
        <div class="text-span">
          <span style="color: #303b5a;">${summary.score}</span>
          <span style="color: #9496A4">&nbsp;/ 100 </span>
        </div>
      </div>     
      `      
    })
  })
})
