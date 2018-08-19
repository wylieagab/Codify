function searchBooks() {
	var search = document.getElementById('search').value;

	document.getElementById('result').innerHTML = '';

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: 'json',
		type: 'GET',

		success: function(data) {
			console.log(data);

			for (i = 0; i < data.items.length; i++) {
				//create div shell and elememnts
				var result = document.getElementById('result');
				var myDiv = document.createElement('div');
				var title = document.createElement('h3');
				var image = document.createElement('img');
				var author = document.createElement('h4');
				var dateP = document.createElement('h5');
				var moreInfo = document.createElement('a');



				//input data

				//Title
				title.innerHTML = data.items[i].volumeInfo.title
				myDiv.appendChild(title);
				
				//IMAGE
				if (data.items[i].volumeInfo.imageLinks) {
					image.src = data.items[i].volumeInfo.imageLinks.thumbnail;
				}
				else {
					image.src = 'img/no-thumbnail.jpg'
				}

				myDiv.appendChild(image);
				// END IMAGE

				//AUTHOR
				if(data.items[i].volumeInfo.authors) {
						if (data.items[i].volumeInfo.authors.length > 1) {
							for (j = 0; j<data.items[i].volumeInfo.authors.length; j++) {
								author.innerHTML += data.items[i].volumeInfo.authors[j];
								if ((j + 1) != data.items[i].volumeInfo.authors.length)
									author.innerHTML += ', ';
							}

						}
						else {
							author.innerHTML = data.items[i].volumeInfo.authors[0];
						}
				}
				else {
					author.innerHTML = "No Author Found";
				}
				myDiv.appendChild(author);
				//END AUTHOR

				//DATEP
				if(data.items[i].volumeInfo.publishedDate) {
					dateP.innerHTML = data.items[i].volumeInfo.publishedDate;
				}
				else {
					dateP.innerHTML = 'No date found';
				}
				myDiv.appendChild(dateP);
				//END DATEP

				//MORE INFO
				moreInfo.href = data.items[i].volumeInfo.infoLink;
				moreInfo.setAttribute('target', '_blank');
				moreInfo.innerHTML = "More Info";
				moreInfo.classList.add('btn');
				moreInfo.classList.add('btn-info');
				myDiv.appendChild(moreInfo);
				//END MORE INFO

				//DIV STYLING
				
				result.appendChild(myDiv);

			}
		}
	});
}	

//create event listener for search. remove form.
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchBooks, false);


