function $( tag, className ) {
    if (tag.startsWith("<") && tag.endsWith(">") ){
        let el=document.createElement(tag.substring(1, tag.length-1)) 
        if (className!==undefined){
            el.className=className
        }
        return el
        // return  document.createElement(tag.substring(1, tag.length-1))
    } else {
        return document.querySelector(tag)
    }
}
//HW1: find вернул array c All object
function findOnMap(grid, classRef){
// a) создать пустой масив
    for (let ri=0; ri<10; ri++){
            for (let ci=0; ci<10; ci++){
                if(grid[ri][ci] instanceof classRef){
                    return grid[ri][ci]
                    //b) добавить масив как новый елемент
                }
            }
         }
         //c) return array
         //либо мы вернем пустой array либо со всеми найдеными обьектами
         //это предостовляет удобство при работе с множествеными обьектами
         //vbyenf 29.20
}

function randomCoord(){
     return parseInt(Math.random() * 9.9 )
    }

function randomPlace(grid){

        let tries=100
        while(tries-->0){
        let r=randomCoord()
        let c=randomCoord()

       if ( grid[r][c] instanceof Empty){
           return[r,c]
          }
       }
    }