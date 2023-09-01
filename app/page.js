import ContainerItems from "./components/containerItems/ContainerItems";
import styles from './globals.css'

export async function fetchPoke() {
  const res = await fetch(`https://reqres.in/api/users`);
  const data = await res.json();
  return data.data
  
}

async function Home() {
  const users = await fetchPoke();
  return (
    <>
      <h1 className="text-base font-semibold leading-7 text-indigo-600 text-center text-[24px]">POKEMON API</h1> 
      <ContainerItems />
    </>
  )
}
export default Home

/* let arrayPokemon = []

for (let i = 1; i <= 20; i++) {
  let data = await traerPokemon(i)
  arrayPokemon.push(data)
} */
/* return {
  props: {
    arrayPokemon
  }
} */