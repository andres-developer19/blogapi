import Image from "next/image"

async function getUSer(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    console.log(data.data)
    return data.data
}

async function page({params}) {
console.log(params)
  const data = await getUSer(params.id)
  console.log(data.avatar)
  return (
    <>
    <h1 className="text-base font-semibold leading-7 text-indigo-600 text-center text-[24px]">user details</h1>
    <div className="flex justify-center items-center">
    <section>
        <h2>{data.first_name} {data.last_name}</h2>
         <Image alt={data.avatar} src={data.avatar} width={300} height={300}/>
         <br></br><span>{data.email}</span>
    </section>
    </div>
    </>
  )
}

export default page