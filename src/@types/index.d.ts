declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}
declare module '*.gif'
declare module '*.ico'
declare module '*.cur'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.png'
declare module '*.svg'
declare module '*.scss'
declare module '*.less'
declare module '*.md'
declare module '*.MD'
declare module '*.mp4'
declare module '*.webm'
declare module '*.ogg'
declare module '*.mp3'
declare module '*.wav'
declare module '*.flac'
declare module '*.aac'
declare module 'maptalks'

declare module '@fortawesome/fontawesome-free-solid/faCoffee'
declare module '@fortawesome/react-fontawesome'

declare var ConfigExt: object 