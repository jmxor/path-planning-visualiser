import {useEffect, useRef} from "react";

interface CanvasProps {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void
}

export default function Canvas(props: CanvasProps) {

  const {draw, ...rest} = props
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas?.getBoundingClientRect()
    const context = (canvas as HTMLCanvasElement).getContext('2d')!

    let frameCount = 0
    let animationFrameId: number

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas ref={canvasRef} {...rest} />
}
