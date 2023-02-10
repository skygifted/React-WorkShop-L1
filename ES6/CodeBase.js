{



    function addSum(a,b){
    
        return a + b
   
    }

    console.log(addSum(4,6))






    class SumNum{
      constructor(name){
          
          this.a = name,
          this.b = name
      }

      Sum(){

          return this.a + this.b
      }

       
    }

    const newResult = new SumNum(4,6)

    console.log(newResult.Sum())
      




}


{

      
    function Text(){

        let text = 'Hello'

        console.log(text)
          
   }


   console.log(Text())


   const Text2 = () =>{

        
       let text = 'Hello2'

   }


   console.log(Text2())
}



{



    var d = 'text'

    {
       let dd = 'text2'
        console.log(d)
    }

    const x = ''
    let s

    console.log(dd)
}

{


    const List = [1,2,3,5]


     const Newlist = List.map(value => value + 2)
    
     console.log(Newlist)
}

{

    const List = ['BMW','Abdulazeez','Nigeria']


 

    // const Car = List[0]
    // const Person = List[1]
 
     const [Car,Person,Country] = List
 
 
     console.log(Car)
}