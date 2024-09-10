type Props = {
    nota: number;
}

export const Number = ({nota}: Props) =>{

    if(nota > 5) nota = 5;
    if(nota < 0) nota = 0

    const notaInt = Math.floor(nota)
    const emoji = ['_','#','&','%','@', '$']
    const stars = `${emoji[notaInt]}`.repeat(notaInt) + ' '.repeat(5-notaInt)

    return(
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{nota.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
    )
}