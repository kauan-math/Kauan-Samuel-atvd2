import styles from './card.module.css'

//essa parte é de um card, onde "chama" algumas propriedades
export const Card = (props) => {
return(
    <div className={styles.card}>
            <img  src={props.image} alt={props.tec} />
            <h3>{props.tec}</h3>
            <p>{props.text}</p>
            </div>

)
}