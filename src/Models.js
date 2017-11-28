//MODELS
class ProcessReference{
    constructor(process, reference){
        this.process = process;
        this._reference = reference;
    }
    get reference(){
        return parseInt(this._reference,2);
    }
    get binaryReference(){
        return this._reference;
    }
}

class PCB{
    constructor(process){
        this.process = process;
    }
    get pageTableId(){
        return this._pageTableId;
    }
    set pageTableId(pageTableId){
        this._pageTableId = pageTableId;
    }
}

class PageTable{
    constructor(process){
        this.process = process;
        this.entries = [];
    }
    get entries(){
        return this._entries;
    }
    set entries(entries){
        this._entries = entries
    }
}

class PageTableEntry{
    constructor(page, frame){
        this.page = page;
        this.frame = frame;
    }
}

class PhysicalEntry{
    constructor(process, page){
        this.process = process;
        this.page = page;
        this.refs = 1;
    }
}