console.log('***** Music Collection *****')
let collection = []
  function addToCollection (title, artist, yearPublished) {
    let record = {
      title:title,
      artist:artist,
      yearPublished:yearPublished
    }
    collection.push(record)
    return record;
  }
//addToCollection('Blonde', 'Frank Ocean', 2016);
  console.log(addToCollection('Blonde', 'Frank Ocean', 2016));
//  addToCollection('Nothing Was the Same', 'Drake', 2013);
  console.log(  addToCollection('Nothing Was the Same', 'Drake', 2013));
  //addToCollection('Victory Lap', 'Nipsey Hussle', 2018);
    console.log(addToCollection('Victory Lap', 'Nipsey Hussle', 2018));
//  addToCollection('My Beautiful Dark Twisted Fantasy', 'Kanye West', 2010)
  console.log(addToCollection('My Beautiful Dark Twisted Fantasy', 'Kanye West', 2010));
//  addToCollection('Trip', 'Jhene Aiko', 2017);
  console.log(addToCollection('Trip', 'Jhene Aiko', 2017));
//  addToCollection('Enter the Wu-Tang 36 chambers', 'Wu-Tang Clan', 1993);
  console.log(addToCollection('Enter the Wu-Tang 36 chambers', 'Wu-Tang Clan', 1993));
console.log(collection);

function showCollection(array){
  console.log(collection.length);
  for (album of collection){
  console.log(album);
 }
}
showCollection();

function findByArtist(artist){
  let results = []
  for (album of collection){
  if (album === record){
  result.push(artist)
  }
  }
    return results;
  }
