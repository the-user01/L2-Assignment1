{
    // Formatting String depending boolean values 
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper == null || toUpper == true) {
            return input.toUpperCase();
        } else {
            return input.toLocaleLowerCase()
        }
    }

    formatString("taWfIqul");
    formatString("taWfIqul", true);
    formatString("taWfIqul", false);

    // -------------------------

    // getting book infos those rating is 4 or above 
    type BookInfo = {
        title: string;
        rating: number;
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 4.0 }
    ];

    function filterByRating(items: BookInfo[]): BookInfo[] {

        const newArray: BookInfo[] = [];

        items.filter((item: BookInfo) => {
            if (item.rating >= 4) {
                newArray.push(item)
            }
        })

        return (newArray);

    }
    filterByRating(books);

    // ----------------------------


    // Generic Array

    function concatenateArrays<T>(...arrays: T[][]): T[]{
        const values: T[] = [];

        for(const arr of arrays){
            values.push(...arr)
        }

        return values;
    }

    concatenateArrays(["a", "b"], ["c"]);
    concatenateArrays([1, 2], [3, 4], [5]);


    //-----------------

    // Vehicle Information
    class Vehicle {
        protected _make: string;
        protected _year: number;

        constructor(make: string, year: number) {
            this._make = make;
            this._year = year
        }

        getInfo() {
            console.log(`"Make: ${this._make}, Year: ${this._year}"`);
        }
    }

    class Car extends Vehicle {
        protected _model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this._model = model;
        }

        getModel() {
            console.log(`"Model: ${this._model}"`);
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla")

    // myCar.getInfo();
    // myCar.getModel();

    //-------------------------------------

    // String or number
    function processValue(value: string | number): number {

        if (typeof value === 'string') {
            return value.length;
        } else {
            return value * 2;
        }
    }

    processValue("hello");
    processValue(10);


    // -------------------


    // Finding product with highest price

    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) return null

        let maxPrice = 0;
        products.map(product => {
            if (product.price > maxPrice) {
                maxPrice = product.price;
            }
        })

        return products.find(product => product.price === maxPrice) || null

    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    getMostExpensiveProduct(products)


    // -------------------------

    // getting weekday or weekend

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend"
            default:
                return "Weekday"
        }
    }

    getDayType(Day.Monday);
    getDayType(Day.Sunday);

    //--------------------------


    
    async function squareAsync(n: number): Promise<number>{

       return new Promise<number>((resolve, reject) =>{
        setTimeout(()=>{
            if(n >=0){
                resolve(n*n)
            }else{
                reject("Error: Negative number not allowed")
            }
        }, 1000)
       })
    }

    (async () => {
          const result = await squareAsync(6);
        //   console.log(result); 
      })();

}