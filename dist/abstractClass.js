"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //calc
        return 8;
    }
}
class Instergram extends TakePhoto {
    constructor(camaraMode, filter, burstMode) {
        super(camaraMode, filter);
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    getSepia() {
        console.log("sepia");
    }
}
const pic = new Instergram("asdf", "asdfasdf", 3);
