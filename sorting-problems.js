//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// SORTING


//1. bubble - your implementation 
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
function Num_ale()
{ 
let y=Math.random()*40;
return Math.floor (1+y);
}
let a=[];
for(i=0;i<6;i++)
{
  let c=Num_ale();
  a[i]=c;
}
document.write("Numeros aleatorios: "+ a+"<br>");  
for (let k = 1; k < a.length; k++) {
        for (let i = 0; i < a.length - k; i++) {
            if (a[i] > a[i + 1]) {
                let alm = a[i];
                a[i] = a[i + 1];
                a[i + 1] = alm;
            }
        }
    }  
document.write("Numeros ordenados: " + a) 

//2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
function Num_ale()
{ 
let y=Math.random()*40;
return Math.floor (1+y);
}
let a=[];
for(i=0;i<6;i++)
{
  let c=Num_ale();
  a[i]=c;
}
document.write(a+"<br>");  

document.write(a.sort((a,b)=>a-b)); 

//3. bubble - your implementation 
//   sort(o)
// -> o an object containing random names: either an array of objects or an object of objects
// <- the random names sorted
// verify is sorted

//4. sort - use JS Array.sort implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted
