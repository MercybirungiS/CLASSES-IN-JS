//Class -> ,they are used to creare objects 
//instance property-basicaly the data of the object 
//instance methods -what they do 
class Rectangle{
    //set up the object
    constructor(_width,_height,_color){
console.log("The object is being created")
this.width=_width;
this.height=_height;
this.color=_color;
    }
    getArea(){
        return this.width * this.height;
    }
    printDescription(){
        console.log(`I am a rectangle of ${this.width} and ${this.height} and i am  color ${this.color} `)
    }
}
let myRectamgle2=new Rectangle(3,5,"blue");
let myRectamgle3=new Rectangle(9,6,"pink");
console.log(myRectamgle2);
console.log(myRectamgle3);
console.log(myRectamgle2.getArea());
console.log(myRectamgle3.getArea())
myRectamgle3.printDescription()
myRectamgle2.printDescription()

//classes getters and setters
class Traiangle{
    constructor(_height){
        this.height=_height;
        this.base=_height
        this.numOfRequestsForArea=0;
    }
    get area(){
        return this.base*this.height;
        this.numOfRequestsForArea++;
    }
    set area (area){

       //this.width=Math.SQRT2(area);
        //this.height=this.width

    }
}
let triangle1= new Traiangle(12);
console.log(triangle1.area);
//triangle1.area=214;
console.log(triangle1.area);
console.log(triangle1.area);
//console.log(triangle1.base)
//console.log(triangle1.height)
console.log(triangle1.numOfRequestsForArea);


//static methods 
class Square {
    constructor(_width){
        this.width=_width
        this.height=_width
    }
static equals(a,b){
    return  a.width+a.height===b.width+b.height;
}
static isValidDimensions(width,height){
    return width === height;
}
}
let square1= new Square(8);
console.log(square1);
let square2= new Square(8);
console.log(Square.equals(square1,square2));
console.log(Square.isValidDimensions(5,8));

//inheritance and extend key words



