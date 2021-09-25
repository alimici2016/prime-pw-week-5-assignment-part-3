console.log('***** Music Collection *****')
let collection = []
  function addToCollection (title, artist, yearPublished) {
    let record= {title:title, artist:artist, yearPublished:yearPublished};
      collection.push(record)
      return record;
  }

  console.log(addToCollection('Blonde', 'Frank Ocean', 2016));
  console.log(  addToCollection('Nothing Was the Same', 'Drake', 2013));
  console.log(addToCollection('Victory Lap', 'Nipsey Hussle', 2018));
  console.log(addToCollection('My Beautiful Dark Twisted Fantasy', 'Kanye West', 2010));
  console.log(addToCollection('Trip', 'Jhene Aiko', 2017));
  console.log(addToCollection('Enter the Wu-Tang 36 chambers', 'Wu-Tang Clan', 1993));
  console.log(collection);

//let animals = ['cat','dog', 'mouse']
//Testing to check if the code below was generic.

function showCollection(array){
  console.log('albums in collection', array.length);
    for (album of array){
      console.log(album);
  }
}
showCollection(collection);

function findByArtist(artist){
  let results = []
    for (let person of collection){
      if (person.artist === artist){
        results.push(person)
      }
    }
      return results;
  }
console.log(findByArtist('Wu-Tang Clan'));
