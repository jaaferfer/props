import Child from "./Child";
const handleName= (fullName)=>{
    alert(`${fullName}'s profile`)
}
const Profile = () => {
  return (
    <Child
        fullName="Full name: Jaafer Feriani"
        bio="My Bio:Never give up"
        profession="Profession: student at Go My Code"
        Children="https://media-exp1.licdn.com/dms/image/C4D0BAQGQiRGb69VRqA/company-logo_200_200/0/1601910148303?e=2159024400&v=beta&t=LqpAHQBvatsScytfqUDhEZF5ZMDX8g3vgZWpDx5a_Hg"
        handleName={handleName}
    />
  );
};
export default Profile;
