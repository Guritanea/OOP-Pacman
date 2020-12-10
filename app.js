let gm = new Gamemap()

let rplace=randomPlace(gm.grid)
new Pacman(rplace[0], rplace[1], gm.grid)

for (let i=0; i<10; i++ ){
    rplace=randomPlace(gm.grid)
    new Coin(rplace[0], rplace[1], gm.grid)
}
for (let i=0; i<10; i++ ){
    rplace=randomPlace(gm.grid)
    new Bomb(rplace[0], rplace[1], gm.grid)
}
 for(let i=0; i<1; i++){
rplace=randomPlace(gm.grid)
new Spider(rplace[0], rplace[1], gm.grid)
}
for(let i=0; i<1; i++){
    rplace=randomPlace(gm.grid)
    new Heart(rplace[0], rplace[1], gm.grid)
    }


// gm.grid[3][3]=s
// s.grid=gm.grid
// s.start()

    gm.render($('.scene'))
    

    $('body').addEventListener('keydown', function (e) {
      //  console.log(e)
        let pacman=findOnMap(gm.grid, Pacman)
      if (e.key=="ArrowDown"){
          pacman.moveDown()
          gm.render($('.scene'))
      }
      if (e.key=="ArrowUp"){
        pacman.moveUp()
        gm.render($('.scene'))
    }
    if (e.key=="ArrowRight"){
        pacman.moveRight()
        gm.render($('.scene'))
    }
    if (e.key=="ArrowLeft"){
        pacman.moveLeft()
        gm.render($('.scene'))
    }

    })
