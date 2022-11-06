/*
-- Search in a collection by all criterias -- 
Object.keys(item) => gets all properties of a item and turns them into array
.some() => if any of the keys array match the condition in the some callback return true, if not false
condition => checks if any of the values of the item properties match the search criteria
*/

export default function filterCollectionByVal(collection, searchVal) {
  return collection.filter((item) => {
    return Object.keys(item).some((key) => {
      return ("" + item[key]).toLowerCase().includes(searchVal.toLowerCase());
    });
  });
}
