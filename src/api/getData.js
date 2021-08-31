const URL = "https://api.github.com/users"
const getData = async(user)=>{
  const res = await fetch(`${URL}/${user}`)
  const data = await res.json()
  return data
}


export default {
  getData
}