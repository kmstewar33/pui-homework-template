const learningType = {
    "Visual-Spatial": {
        "styleIcon": "visual-spatial.jpg",
        "styleDefinition": "the human ability to think in images and pictures--the capacity to visualize accurately and abstractly",
        "musicIcon": "visual-spatial_music.jpg",
        "musicDefinition": "drawing diagrams, making collages, taking photos, puzzles, playing sports, using maps",
        "bookIcon": "visual-spatial_book.jpg",
        "bookDefinition": "Patterns hum, shapes entwine, a dance of lines, a realm divine. Eyes map the maze; spce speaks: design."
    },

    "Logical-Mathematical": {
        "styleIcon": "logical-mathematical.jpg",
        "styleDefinition": "the human ability to think in images and pictures--the capacity to visualize accurately and abstractly",
        "musicIcon": "visual-spatial_music.jpg",
        "musicDefinition": "programming, building systems, observing patterns in nature, writing mysteries, music composition",
        "bookIcon": "logical-mathematical_book.jpg",
        "bookDefinition": "Numbers pulse, reason flows, a lattice where the order grows. Mind computes; the cosmos shows."
    },
    
    "Supervised": {
        "styleIcon": "supervised.jpg",
        "styleDefinition": "the computational ability to predict outcomes and recognize patterns from data sets organized and labeled by humans",
        "musicIcon": "supervised_music.jpg",
        "musicDefinition": "studying flashcards, following a recipe, playing simon says, identifying animals from pictures",
        "bookIcon": "supervised_book.jpg",
        "bookDefinition": ""
    },
    "Unsupervised": {
        "styleIcon": "unsupervised.jpg",
        "styleDefinition": "the computational ability to predict outcomes and recognize patterns from raw and unorganized data points generated by human activity",
        "musicIcon": "unsupervised_music.jpg",
        "musicDefinition": "finding shapes in clouds, playing with a kaleidoscope, summarizing a story, connecting stars to constellations",
        "bookIcon": "unsupervised_book.jpg",
        "bookDefinition": ""
    },  
 };

class Learn {
    constructor (learningType, styleIcon, styleDefinition, musicIcon, musicDefinition, bookIcon, bookDefinition){
        this.styleName = learningType;
        this.styleImg = styleIcon;
        this.styleText = styleDefinition;
        this.musicImg = musicIcon;
        this.musicText = musicDefinition;
        this.bookImg = bookIcon;
        this.bookText = bookDefinition;
    }
 
 }

