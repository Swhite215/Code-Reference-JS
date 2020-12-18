const myFavouriteAuthors = {
    allAuthors: {
        fiction: ["Agatha Christie", "J.K. Rowling", "Dr. Seuss"],
        scienceFiction: [
            "Neal Stephenson",
            "Arthur Clarke",
            "Isaac Asimov",
            "Robert Heinlein"
        ],
        fantasy: ["J.R.R. Tolkein", "J.K. Rowling", "Terry Pratchett"]
    },
    getAllAuthors() {
        const authors = [];
        for (const author of this.allAuthors.fiction) {
            authors.push(author);
        }
        for (const author of this.allAuthors.scienceFiction) {
            authors.push(author);
        }
        for (const author of this.allAuthors.fantasy) {
            authors.push(author);
        }
        return authors;
    },
    [Symbol.iterator]() {
        //Get all the authors in an array
        const genres = Object.values(this.allAuthors);

        //Store the current genre and author index
        let currentAuthorIndex = 0;
        let currentGenreIndex = 0;

        return {
            //Implementation of next()
            next() {
                const authors = genres[currentGenreIndex];

                //doNotHaveMoreAuthors is true when the authors array is exhausted
                const doNotHaveMoreAuthors = !(
                    currentAuthorIndex < authors.length
                );

                if (doNotHaveMoreAuthors) {
                    //Move up the genre index
                    currentGenreIndex++;

                    //reset the author index
                    currentAuthorIndex = 0;
                }

                ///if all genres are over, then we need to tell the iterator that we can not give more values
                const doNotHaveMoreGenres = !(
                    currentGenreIndex < genres.length
                );
                if (doNotHaveMoreGenres) {
                    return {
                        value: undefined,
                        done: true
                    };
                }

                return {
                    value: genres[currentGenreIndex][currentAuthorIndex++],
                    done: false
                };
            }
        };
    }
};

//Issue with this solution, The developer will have to know the exact name and return type of the method that returns all the data.
console.log(myFavouriteAuthors.getAllAuthors());

const iterable = {
    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next() {
                step++;

                if (step === 1) {
                    return { value: "This", done: false };
                } else if (step === 2) {
                    return { value: "is", done: false };
                } else if (step === 3) {
                    return { value: "iterable", done: false };
                }

                return { value: undefined, done: true };
            }
        };

        return iterator;
    }
};

var iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const author of myFavouriteAuthors) {
    //console.log(myFavouriteAuthors);
    console.log(`Author: ${author}`);
}
