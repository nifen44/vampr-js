class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let number = 0;
    let upOne = this;

    while(upOne.creator !== null){
      number++;
      upOne = upOne.creator;
    }

    return number;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.creator == null) 
    {
      console.log('=== creator null');
      return true;
    }
    if(this.checkLevel(this) < this.checkLevel(vampire)) 
    {
      console.log('=== more senior');
      return true;
    } else{
      console.log(this.checkLevel(this));
      console.log(this.checkLevel(vampire));
      console.log('=== less senior');
      return false;
    }
  }

  checkLevel(vampire){
    let level = 0;
    let upOne = vampire;

    while(upOne.creator !== null){
      level++;
      upOne = upOne.creator;
    }

    return level;

  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

