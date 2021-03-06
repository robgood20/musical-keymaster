app.service("ConversionEngine", function () {
    
    //This converts difficult chords (B# to C), (E# to F), (Cb to B), (Fb to E) to good stuff
     this.funkOut = function(chord){
         alert("funkOut inservice");
         switch (chord){
             case "B#":
             chord = "C";
             break;
             case "E#":
             chord = "F";
             break;
             case "Cb":
             chord = "B";
             break;
             case "Fb":
             chord = "E";
         }
         return chord;
     }
     
     
    //reference lists to create conversion tables from
    this.sharpList = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    this.flatList = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    this.guitarList = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab'];

    
    /* all this code is not needed for our purposes
    this.sharpTable = [];
    this.flatTable = [];
    this.guitarTable = [];

    for (var h = 0; h < 12; h++) {
    this.sharp = {};
    this.flat = {};
    this.guitar = {};
        for (var i = 0; i < 12; i++) {
            this.sharp[i.toString()]=this.sharpList[h + i];
            this.flat[i.toString()]=this.flatList[h + i];
            this.guitar[i.toString()]=this.guitarList[h + i];
        }
            this.sharpTable.push(this.sharp);
            this.flatTable.push(this.flat);
            this.guitarTable.push(this.guitar);
    }
    
    //TODO: more fancy stuff to create table pointers within the song objects & eventually reconvert to the crazy/stupid keys that we "switched" out of above (if needed) ....................
    */
    


    this.converter = function(chord, list){
        for(var i =0; i < list.length; i++){
            var currentChord = list[i];
            if(chord === currentChord){
                //go up by 2 make sure thats okay
                //return list[nextIndex]
            }
        }
    }

}) // end of ConversionEngine service

