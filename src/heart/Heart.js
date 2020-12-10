class Heart{
    constructor(r, c, grid){
        this.r=r
        this.c=c
        this.grid=grid
        this.grid[r][c]=this
    }

    render (rootElement){
        this.rootElement=rootElement
        let div=$('<div>', 'heart')
        this.rootElement.appendChild(div)
    }
}