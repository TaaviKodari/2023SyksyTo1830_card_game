export default function PlayButton({text, handleClick}){
    return(
        <button className='play-button' type='button' onClick={handleClick} >{text}</button>
    );
}