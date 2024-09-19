document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('movieScroll');
    const scrollAmount = 500;

    document.getElementById('scrollButton').addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    document.getElementById('scrollButton1').addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});
const apiKey = 'da066f6e';
        const movieContainer = document.getElementById('movieScroll');
        const loadingIndicator = document.getElementById('loading');

        async function fetchMovies() {
            loadingIndicator.style.display = 'block'; 

            try {
                const response = await fetch(`http://www.omdbapi.com/?s=Guardians&apikey=${apiKey}`);
                const data = await response.json();

                if (data.Response === 'True') {
                    displayMovies(data.Search);
                } else {
                    console.error(data.Error);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                loadingIndicator.style.display = 'none';
            }
        }

        function displayMovies(movies) {
            movieContainer.innerHTML = ''; 

            movies.forEach((movie, index) => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card bg-gray-900 relative p-0 rounded-lg';
                movieCard.innerHTML = `
                    <img src="${movie.Poster}" alt="${movie.Title}" class="w-full h-60 object-cover rounded-lg">
                    <span class="absolute top-1 left-1 text-white bg-red-600 px-1 rounded text-xs md:text-sm lg:text-base">TOP 10</span>
                    <span class="absolute bottom-1 left-0 right-0 text-center bg-red-600 text-white text-xs md:text-sm lg:text-base">Recently Added</span>
                    <span class="absolute top-1 right-1 text-white font-bold text-xs md:text-sm lg:text-base">${index + 1}</span>
                `;

                movieContainer.appendChild(movieCard);
            });
        }
        window.onload = fetchMovies;