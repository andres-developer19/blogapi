'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Items.module.css'

function Items({users}) {

const router = useRouter()
  
  return (
    <>
    {users.map((el, i) => (
        <article
        className={styles.card}
        key={el.id}
        onClick={() => {
        router.push(`/users/${el.id}`)
        }}
        >
          <div className="flex -space-x-2 overflow-hidden">
          <Image className="inline-block h-100 w-100 rounded-full ring-2 ring-white" alt={el.avatar} src={el.avatar} width={140} height={140} />
          </div>
            <h2 className="mt-6 text-sm text-gray-500">{el.id} - {el.first_name} {el.last_name}</h2>
          <h3 className="absolute inset-0">{el.email}</h3>
          <Link href={`mailto:${el.url}`} >
          <span>{el.email}</span>
          </Link>
        </article>
      ))}
    </>
  )
}

export default Items