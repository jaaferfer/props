import PropTypes from "prop-types";
const Child= (props) =>{
    const {
        fullName,
        bio,
        profession,
        Children,
        handleName
    } = props
    return (<div className='content'>
            {handleName(fullName)}
    <h1>{fullName}</h1>
        <h2>{bio}</h2>
        <h3>{profession}</h3>
    <img className='p' src={Children} alt='failed to load' style={{width: '100px', height: '100px',borderRadius:'500px',position:'relative'}}/>
    </div>
    )}
    Child.defaultProps={
        
        fullName:'Jaafer Feriani',
        bio:"Never give up",
        Children:"https://media-exp1.licdn.com/dms/image/C4D0BAQGQiRGb69VRqA/company-logo_200_200/0/1601910148303?e=2159024400&v=beta&t=LqpAHQBvatsScytfqUDhEZF5ZMDX8g3vgZWpDx5a_Hg",
        profession:"student at Go My Code"
    }
    Child.propTypes={
        fullName: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string,
        Children: PropTypes.string,
        handleName: PropTypes.func
    }
    export default Child