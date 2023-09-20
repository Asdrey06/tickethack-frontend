
document.querySelector('#btnSearch').addEventListener('click', function () {
	const departure = document.querySelector('#departure').value;
  const arrival = document.querySelector('#arrival').value

	fetch(`http://localhost:3000/travels/${departure}/${arrival}`, {

		headers: { 'Content-Type': 'application/json' },
	
	}).then(response => response.json())
		.then(data => {
			if (data.result) {
				document.querySelector('#containerB').innerHTML = '';

				for (let i = 0; i < data.trips.length; i++) {
					
				document.querySelector('#containerB').innerHTML += `
				<div class="tripsContainer">
					<p class="departure">${data.trips[i].departure}</p>
					<p class="arrival">${data.trips[i].arrival}</p>
					<p class="price">${data.trips[i].price}</p>
					<button class="bookTrips" id="${data.trips[i]._id}">Book</button>
			</div>
				</div>
						`;
				}


				document.querySelector('#departure').value = '';
				document.querySelector('#arrival').value = '';
			}

		});
});

document.querySelector('#date').addEventListener('click',
      function () {
       document.querySelector("#btn-date").value
      
        }
    );
