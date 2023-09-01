import styles from './ContainerItems.module.css'
import Items from '../items/Items'

export async function fetchPoke() {
    const res = await fetch(`https://reqres.in/api/users`);
    const data = await res.json();
    return data.data
}

async function ContainerItems() {
    const users = await fetchPoke();
  return (
    <div className="justify-center items-center">
    <section className="grid grid-cols-3 gap-4">
        <Items users={users} />
    </section>
    </div>
  )
}


export default ContainerItems