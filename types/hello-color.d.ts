declare module 'hello-color' {
  const hello: (
    base: string,
    options?: {
      saturation?: number
      lightness?: number
      contrast?: number
      hues?: number
    }
  ) => {
    base: string
    contrast: string
    dark: boolean
    scale: string[]
    hues: string[]
  }

  export default hello
}
