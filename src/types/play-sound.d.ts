declare module 'play-sound' {
    interface Options {
      player?: string;
      players?: string[];
      [key: string]: any;
    }
  
    interface Player {
      play(
        file: string,
        options?: Options,
        callback?: (err: Error | null) => void
      ): any;
    }
  
    function init(opts?: Options): Player;
  
    export = init;
  }
  