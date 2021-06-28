export class Duck {
    flyBehavior: IFlyingBehavior;
    quackBehavior: IQuackBehavior;

    swim()
    {
        console.log('Swimming');
    }
    display()
    {
        console.log('displaying');
    }

    performFly()
    {
        this.flyBehavior.fly();
    }

    performQuack()
    {
        this.quackBehavior.quack();
    }

    setFlyBehavior(flyBehavior: IFlyingBehavior)
    {
        this.flyBehavior=flyBehavior;
    }

    setQuackBehavior(quackBehavior: IQuackBehavior)
    {
        this.quackBehavior= quackBehavior;
    }
}

export interface IFlyingBehavior
{    
    fly();
}
export interface IQuackBehavior
{
    quack();
}


export class Quack implements IQuackBehavior
{
    quack()
    {
        console.log("Quack Quack !!");
    }
}

export class Squeak implements IQuackBehavior
{
    quack()
    {
        console.log("Squeak Squeak !!");
    }
}

export class FlyWithWings implements IFlyingBehavior
{
    fly()
    {
        console.log('flying with wings');
    }
}


export class FlyNoWay implements IFlyingBehavior
{
    fly()
    {
        console.log('I cant fly :(');
    }
}

/** Cant fly */
/** Squeaks instead of quack */
export class RubberDuck extends Duck
{ 
    constructor()
    {
        super();
        this.quackBehavior= new Quack();
        this.flyBehavior= new FlyNoWay(); 
    }
}

export class RealDuck extends Duck
{
    constructor()
    {
        super();
        this.quackBehavior= new Squeak();
        this.flyBehavior= new FlyWithWings(); 
    }
}

let duck= new RubberDuck();
duck.performFly();
duck.setFlyBehavior(new FlyWithWings());
duck.performFly();