import { useRef, useEffect } from 'react'
// insperation - https://codepen.io/MarioD/details/gWregQ
export default function Bubbles() {
  const element = useRef()

  useEffect(() => {
    init(element)
  }, [element])

  return (
    <canvas
      ref={element}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0'
      }}
    ></canvas>
  )
}

const init = ({current}) => {
  let bubbles = []
  let animationFrame
  const canvas = current
  const bubbleCount = 14
  // check if getContext is avalible
  if (!canvas.getContext) return

  const ctx = canvas.getContext('2d')
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  window.addEventListener('resize',() => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  })

  const gotoFrame = () => {
    animationFrame = window.requestAnimationFrame(gotoFrame)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bubbles.map((item) => item.update())
  }

  const factory = () => {
    const radius = 5 + Math.random() * 14
    const dx = Math.random() * canvas.width - radius
    const dy = Math.random() * canvas.height
    const distanceBetween = 50 + Math.random() * 40
    const count = canvas.height + dy
    return new Bubble(radius,dx,dy,distanceBetween,count)
  }

  class Bubble {
    x;
    y;
    radius;
    dx;
    dy;
    distanceBetween;
    count;
    color;
    lineWidth;
    speed;

    constructor(
      radius,
      dx,
      dy,
      distanceBetween,
      count,
    ){
      this.x = 0
      this.y = 0
      this.radius = radius
      this.dx = dx
      this.dy = dy
      this.distanceBetween = distanceBetween
      this.count = count
      this.color = 'rgba(255,255,255,.35)'
      this.lineWidth = 1
      this.speed = .75
    }

    draw(){
      ctx.beginPath()
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.arc(0, 0, this.radius, 0, Math.PI*2, false);
      ctx.stroke();
      ctx.restore();
    }

    update(){
      this.x = Math.sin(this.count/this.distanceBetween) * 50 + this.dx;
      this.y = this.count;

      if(this.count < 0 - this.radius) {
        this.count = canvas.height + this.dy;
      } else {
        this.count -= this.speed;
      }

      this.draw()
    }
  }

  bubbles = Array(bubbleCount).fill(null).map(() => factory())

  gotoFrame()
}