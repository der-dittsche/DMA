/* export interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstMode: number;
}

export interface Story {
  createStory(): void;
}

export class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {}
}

export class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    public stort: string
  ) {}
  createStory(): void {
    console.log("Story is created");
  }
}
 */
