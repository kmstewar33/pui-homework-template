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
       
    },
    "Supervised": {
    
    },
    "Unsupervised": {
        
    },  
 };

class Learn {
    constructor (rollType, rollGlazing, packSize, rollPrice, cartID){
        this.type = rollType;
        this.glaze = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.cartID = cartID;

        this.totalPrice = this.calculatePrice();
    }
 
 }