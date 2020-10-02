/**
 * Дан массив со словами-паразитами, напишите функцию, которая, используя алгоритм сортировки выбором, вернет отсортированный по количеству употреблений массив!
 */
let mass = [
    {title: "кек", count: 8},
    {title: "ну", count: 75},
    {title: "блин", count: 14},
    {title: "это", count: 123},
    {title: "лол", count: 54},
    {title: "короче", count: 198},
];

function selectsort(mass){
    
    for (let i = 0; i < mass.length-1; i++){
        min = mass[i].count;
        for (let a = i+1; a < mass.length; a++){
            if (min > mass[a].count){
                mass[i].count=mass[a].count;  
                mass[a].count=min;
                  }
            }
       }
console.log("Рейтинг наиболее часто употребляемых слов паразитов:")
for (let i = 0; i < mass.length; i++){
  console.log(`${i+1}` + `.` + mass[i].title)
  }
}
selectsort(mass)
