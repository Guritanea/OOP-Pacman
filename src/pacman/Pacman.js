class Pacman{
    constructor(r, c, grid){
this.r=r
this.c=c
this.grid=grid
this.grid[r][c]=this
this.status="alive"
this.coins=0
this.lives=3

    }
    moveDown(){
 
      if (this.r==9){
         this.r=0
         this.grid[9][this.c]=new Empty() 
        } else 
        this.grid[this.r++][this.c]=new Empty() 
        this.collisionUpdate()
    }
    moveUp(){
            if (this.r==0){
            this.r=9
            this.grid[0][this.c]=new Empty()
        } else
        this.grid[this.r--][this.c]=new Empty()
        this.collisionUpdate()
       }

    moveRight(){  
           if (this.c==9){
            this.c=0
            this.grid[this.r][9]=new Empty()
        } else
        this.grid[this.r][this.c++]=new Empty()
        this.collisionUpdate()
       }
    moveLeft(){  
            if (this.c==0){
            this.c=9
            this.grid[this.r][0]=new Empty()
        } else
        this.grid[this.r][this.c--]=new Empty()
        this.collisionUpdate()
       }


       collisionUpdate(){
        if(this.grid[this.r][this.c] instanceof Bomb){
              this.status="exploding"
              this.lives--
              document.getElementById('lives').innerText='lives: '+this.lives

        }
        if(this.grid[this.r][this.c] instanceof Empty){
           this.status="alive"   
        }
           if(this.grid[this.r][this.c] instanceof Coin){
           this.coins++
           document.getElementById('points').innerText='Points: '+this.coins
        }

        if(this.grid[this.r][this.c] instanceof Heart){
            this.lives++
            document.getElementById('lives').innerText='lives: '+this.lives
         }
           this.grid[this.r][this.c]=this
       }  


    render (rootElement){
        this.rootElement=rootElement
        let div=$('<div>', `pacman ${this.status}`)
        this.rootElement.appendChild(div)
    }
}
//Добавить очки здоровья
//состояния полоска над пакнам и в зависимости от жизнм показывать состояние
//storagi для сохранения состояния

//points 
//Lives