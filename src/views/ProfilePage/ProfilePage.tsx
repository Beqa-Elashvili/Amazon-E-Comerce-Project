import { useGetUserData } from "@src/hooks/useGetUserData";

export function ProfilePage() {
  const { userdata } = useGetUserData();
  console.log(userdata);

  return (
    <div>
      <h1>{userdata?.first_name}</h1>
      <h2>{userdata?.last_name}</h2>
      <h3>{userdata?.email}</h3>
      <h4>{userdata?.phone_number}</h4>
      <h4>{userdata?.role}</h4>
    </div>
  );
}
export default ProfilePage;
