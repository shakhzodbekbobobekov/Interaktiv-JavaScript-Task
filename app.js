function showNumbers(limit) {
    for( i = 0; i <= limit; i++  ){
        if( i % 2 === 0 ){
            console.log('EVEN');
        }else{
            console.log('ODD');
        }
    }
}
showNumbers(10);