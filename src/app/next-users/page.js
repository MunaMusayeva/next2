import Card from "@/components/common/Card"

const Users = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    if (!response.ok) throw new Error("user fetch failed")

    return(
        <div className="grid grid-cols-3 gap-5 p-5">
            {data.map(user=> <Card key={user.id} data={user} />)}
        </div>
    )

}
export default Users