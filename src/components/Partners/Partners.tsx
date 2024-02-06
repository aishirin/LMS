import css from './Partners.module.css'

export const Partners = () => {
    return (
        <div className={css.header}>
            <h1>Наши партнеры</h1>
            <div className={css.icons}>
                <img src="https://tutor.caedmi.com/wp-content/uploads/2023/10/community-chest-2.png" alt="Community Chest of Korea" />
                <img src="https://tutor.caedmi.com/wp-content/uploads/elementor/thumbs/khayah-logo-q9ecp04b6y6ow90xcjd2488e65o2mzq504yq356dsg.png" alt="Khaya.kg" />
                <img src="https://tutor.caedmi.com/wp-content/uploads/elementor/thumbs/caedmi-logo-q9ecp04872e2cd2opwib4s58p2kuz8hyauy6xavytw.png" alt="caedmi" />
            </div>
        </div>
    )
}