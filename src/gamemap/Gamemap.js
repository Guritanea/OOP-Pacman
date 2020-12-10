class Gamemap{
    constructor(){

        // let p= new Pacman(4, 4)
        // let c=new Coin()
        let e=new Empty()
        this.grid=[
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
            [e, e, e, e, e, e, e,e, e, e],
        ]
        // p.grid=this.grid
    }

    render(rootElement){

        this.rootElement = rootElement  
       
        let divParent=$('<div>', 'map')   
        for (let ri=0; ri<10; ri++)
            for (let ci=0; ci<10; ci++)                        
                this.grid[ri][ci].render(divParent) 

        this.rootElement.innerText=""
        this.rootElement.appendChild(divParent)


        document.getElementById('lives').innerText='Lives: '
        for (let i=0; i<findOnMap(gm.grid, Pacman).lives; i++){
            let img=document.createElement('img')
            img.src='src/heart/icon.png'
            img.style.width='15px'
            document.getElementById('lives').appendChild(img)
        }

    }
//сохранение сетки игры в LocalStorage
    save(){
       let cache = [];
       let  json=JSON.stringify(this, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if(value instanceof Pacman){
                value.type="Parcman"
            }
            if(value instanceof Bomb){
                value.type="Bomb"
            }
            if(value instanceof Spider){
                value.type="Spider"
            }
            if(value instanceof Heart){
                value.type="Heart"
            }
            // Duplicate reference found, discard key
            if (cache.includes(value)) return;

           // Store value in our collection
           cache.push(value);
         }
       return value;
        });
        cache = null; // Enable garbage collection
        localStorage.setItem("game", json)
    //     let array=JSON.parse(localStorage.getItem("game"))
    //     console.log(arraya)
 }
}