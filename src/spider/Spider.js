class Spider{
    constructor(r, c, grid){
this.r=r
this.c=c
this.grid=grid
this.grid[r][c]=this
//this.start()

    }
    //let pacman=findOnMap(gm.grid, Pacman)
    moveDown(){
     this.grid[this.r][this.c]=new Empty()
     if (this.r==9){
         this.r=-1
     }
     this.grid[++this.r][this.c]=this
    
    }
    moveUp(){
        this.grid[this.r][this.c]=new Empty()
        if (this.r==0){
            this.r=10
        }
        this.grid[--this.r][this.c]=this
       }
       moveRight(){
        this.grid[this.r][this.c]=new Empty()
        if (this.c==9){
            this.c=-1
        }
        this.grid[this.r][++this.c]=this
       }
       moveLeft(){
        this.grid[this.r][this.c]=new Empty()
        if (this.c==0){
            this.c=10
        }
        this.grid[this.r][--this.c]=this
       }
       
    render (rootElement){
        this.rootElement=rootElement
        let div=$('<div>', 'spider')
        this.rootElement.appendChild(div)

    }
     start(){
      setInterval(this.alive.bind(this), 
      1000
      )
}
    alive(){
        let pacman=findOnMap(gm.grid, Pacman)
        if(pacman){
    // console.log(">>>", this)
     if(pacman.r>this.r){
         this.moveDown()
     }
     if(pacman.r<this.r){
        this.moveUp()
    }
    if(pacman.c<this.c){
        this.moveLeft()
    }
    if(pacman.c>this.c){
        this.moveRight()
    }
    //  this.moveRight()
     gm.render($('.scene'))
    }
   }
}