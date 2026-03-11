/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREMIUM_CODES?: string
  readonly VITE_PREMIUM_VALIDATE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.png' {
  const src: string
  export default src
}
declare module '*.PNG' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.ico' {
  const src: string
  export default src
}
