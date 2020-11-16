export class Block {
    blockHead   = "";
    preblock    = "";
    blockHash   = "";
    blockBody   = ""; 

    constructor(blockBody, blockHead, preblock){
        this.blockHead  =   this.blockHead;
        this.blockBody  =   this.blockBody;
        this.preblock   =   this.preblock;
    }

    getHash (){
        return this.blockHash;
    }
    getBlockBody (){
        return this.blockBody;
    }

}