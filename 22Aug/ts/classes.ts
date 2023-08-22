//class
class Demo{
    private demoData: string;
   static count: number = 0;
    //readonly can be initialised during the declaration or in the constructor
    private readonly demo: string;
    constructor(){this.demo = "data";};
    public func1(a: number):void{
        Demo.count = 10;
    };
}


const d = new Demo();
d.func1(2)