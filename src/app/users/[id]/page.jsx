async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  console.log(data);
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);
  return <div className="bg-emerald-200 p-10 text-slate-900 rounded-md">
    <img src={user.avatar} className="rounded-full m-auto my-4" />
    <h3 className="text-3xl">{user.id}.- {user.first_name} {user.last_name}</h3>
    <p>email: {user.email}</p>
  </div>;
}

export default UserPage;
