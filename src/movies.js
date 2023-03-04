// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director);

    
    const directorsClean = directors.filter((director, index) => directors.indexOf(director) === index);
   
    const directorsSet = new Set(directors);

    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });

    return spielbergDramas.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const totalScore = moviesArray.reduce((accumulator, movie) => {
        if (movie.score) {
            return accumulator + movie.score;
        } else {   
            return accumulator;
        }
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { 
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    const moviesCopy = [...moviesArray];
    const sortedMovies = moviesCopy.sort((movie1, movie2) => {
        if (movie1.year === movie2.year) {
           
            return movie1.title.localeCompare(movie2.title);
        } else {
            return movie1.year - movie2.year;
        }
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray];
    const moviesCopy2 = moviesArray.slice();
    const moviesCopy3 = [].concat(moviesArray);
    const moviesCopy4 = Array.from(moviesArray);

    const sortedMovies = moviesCopy.sort((movie1, movie2) => {
        return movie1.title.localeCompare(movie2.title);
    });

    const titles = sortedMovies.map((movie) => movie.title);
    return titles.slice(0, 20);
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesCopy = [...moviesArray];
    const moviesInMinutes = moviesCopy.map((movie) => {
        const durationArray = movie.duration.trim().split(" ");
        const durationInMinutes = durationArray.reduce((accumulator, duration) => {
            if (duration.includes("h")) {
                return accumulator + parseInt(duration.slice(0, -1)) * 60;
            } else {
                return accumulator + parseInt(duration.slice(0, -3));
            }
        }, 0);
    
        const newMovie = { ...movie };
       
        newMovie.duration = durationInMinutes;
       
        return newMovie;
    });
    return moviesInMinutes;
 }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    const yearlyScores = moviesArray.reduce((accumulator, movie) => {
        if (accumulator[movie.year]) {
            accumulator[movie.year].push(movie.score);
        } else {
            accumulator[movie.year] = [movie.score];
        }
        return accumulator;
    }, {});
    
    const yearlyScoresArray = Object.entries(yearlyScores);
    const yearlyScoresWithAverage = yearlyScoresArray.map((yearlyScore) => {
       
        const totalScore = yearlyScore[1].reduce((accumulator, score) => {
            return accumulator + score;
        }, 0);
        const newYearlyScore = [...yearlyScore];
        newYearlyScore.push(totalScore / yearlyScore[1].length);
        return newYearlyScore;
    });
    const sortedYearlyScores = yearlyScoresWithAverage.sort((yearlyScore1, yearlyScore2) => {
        return yearlyScore2[2] - yearlyScore1[2] || yearlyScore1[0].localeCompare(yearlyScore2[0]);
    });
    return `The best year was ${sortedYearlyScores[0][0]} with an average score of ${sortedYearlyScores[0][2]}`;
 }
