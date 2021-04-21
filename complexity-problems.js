//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm 
let h=1;  
function mcm (a,b){
let i=2;
while(i<=a || i<=b){
if(a%i==0 || b%i==0){
  h*=i;
 	if(a%i==0)
    a=a/i;
  if(b%i==0)  
    b=b/i;
  }
  else
  i++;
}
return h;  
}
let a=prompt("Ingrese un numero "),b=prompt("Ingrese otro numero ");
let c= mcm(a,b);
document.write( " minimo comun  multiplo  " + c );  
//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]
<script>

function Num_ale()
{ 
let y=Math.random()*20;
return Math.floor (1+y);
}
let a=Num_ale();

document.write("Numero aleatorio " + a );
 
</script>
//4. random name
//   randomName()
// -> 
// <- one random name
// ie name371
 <script>

function Num_ale()
{ 
let y=Math.random()*40;
return Math.floor (1+y);
}
let a=Num_ale();

document.write("Nombre anónimo " + a );
 
</script>
