abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    //calc
    return 8;
  }
}
class Instergram extends TakePhoto {
  constructor(
    public camaraMode: string,
    public filter: string,
    public burstMode: number
  ) {
    super(camaraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const pic = new Instergram("asdf", "asdfasdf", 3);
