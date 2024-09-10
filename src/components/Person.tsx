const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday:'long'}).format(new Date())
}
type Props = {
    name: string;
    avatar?: string;
    roles: string[];
}
export const Person = (
    {name,
    avatar = 'https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg', 
    roles}
    : Props) =>{
    
;


    return(
        <>
            <h1 className="p-3">{name} - {getWeekDay()}</h1>
            <img src={avatar} alt="Elon Musk" className="w-40" />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </>
    )
}