const UserFavoriteColors = (props) => {
    return props.fav_animals.map((item , i) => {
        return <li key={i}>{item}</li>
    })
}

export default UserFavoriteColors