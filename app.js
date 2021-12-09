// todayHomeworkTask = '07.12.2021'
// function showNumbers(limit) {
//     for( i = 0; i <= limit; i++  ){
//         if( i % 2 === 0 ){
//             console.log('EVEN');
//         }else{
//             console.log('ODD');
//         }
//     }
// }
// showNumbers(10);
///////////////////////////////////////////////////////////////////
// const marks = [80, 80, 50];
// console.log(calculateGrade(marks));

// function calculateGrade(marks) { 
//     natija = calculateArray(marks)   
//     if ( natija <= 59 ) return 'F';
//     if ( natija >= 60 && natija < 69) return 'D'; 
//     if ( natija >= 70 && natija < 79 ) return 'C';
//     if ( natija >= 80 && natija < 89 ) return 'B';
//     if ( natija >= 90 && natija < 100 ) return 'A'; 
// }

// function calculateArray(array){
//      let summa = 0    
//     for(let i = 0; i<= marks[i]; i++){
//         summa += marks[i]
//     }
//     let natija = summa/marks.length
//     console.log(natija);
//     return natija
// }
////////////////////////////////////////////////////////
// todayHomeworkTask = '09.12.2021'

// TASK 1
//3 ga bo'linuvchi sonlar
//5 ga bo'linuvchi sonlar

// console.log(sum(10));
// function sum(limit) {
//     let summa = 0

//    for( let i = 1; i <= limit; i++ ){
//     if( (i % 3 === 0) || (i % 5 === 0) )
//         summa += i
//    }

//    return (summa);
// }

// TASK 2
// let summa =''
// showStars(5)
// function showStars(rows){
//     for( i = 1; i<= rows; i++ ){
//         summa += '*'
//     console.log(summa);
//     }
// }

// TASK 3
// let summa =''
// showStars(1)
// function showStars(rows){
//     for( i = 1; i<= rows; i++ ){
//         summa += '*'
//     console.log(summa);
//     }
// }

// TASK 4
// let summa =''
// showStars(10)
// function showStars(rows){
//     for( i = 1; i<= rows; i++ ){
//         summa += '*'
//     console.log(summa);
//     }
// }

// TASK 5 second
firstInspection(20)
function firstInspection(qiymat){
    for( let son = 2; son <= qiymat; son++ ){
        if( secondInspection(son)){
            console.log(son);
        }
    }
}

function secondInspection(son) {
    for( let son2 = 2; son2 < son; son2 ++ )
        if( son % son2 === 0 ){
            return false;
        }
    return true;
}