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
        this.pageFaults = 0;
        this.pageTableId;
        this.memoryReferences = 0;
        this.uniquePages = [];
    }
}

class PageTable{
    constructor(process){
        this.process = process;
        this.entries = [];
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
    }
    get ref(){
        return this._ref;
    }
    set ref(ref){
        this._ref = ref;
    }
}