const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
class Char {
    constructor(){
        this.width = 16
        this.height = 16
        this.color = "red"
        this.x = 50
        this.y = 50
    }
    update(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
const char = new Char()

function render(){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 512, 512)
    char.update()
    requestAnimationFrame(render)
}
render()